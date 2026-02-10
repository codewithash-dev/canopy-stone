'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

const STORAGE_KEY = 'canopy_stone_user';

type User = { email: string; name?: string } | null;

type AuthContextType = {
  user: User;
  setUser: (user: User) => void;
  signOut: () => void;
  isReady: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
      if (stored) {
        const parsed = JSON.parse(stored) as User;
        if (parsed?.email) setUserState(parsed);
      }
    } catch {
      setUserState(null);
    }
    setIsReady(true);
  }, []);

  const setUser = useCallback((u: User) => {
    setUserState(u);
    if (typeof window !== 'undefined') {
      if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
      else localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const signOut = useCallback(() => {
    setUserState(null);
    if (typeof window !== 'undefined') localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, signOut, isReady }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
