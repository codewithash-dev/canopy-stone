'use client';

type Tab = 'home' | 'knowledge-base' | 'signin';

export default function SupportHeader({ activeTab, showSearch = true }: { activeTab: Tab; showSearch?: boolean }) {
  return (
    <>
      <header className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <img src="/images/logo-transparent.png" alt="Canopy Stone" className="h-14 w-auto" />
            <span className="text-sm font-medium text-white/90">Canopy Stone Support</span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="/knowledge-base"
              className={activeTab === 'home' ? 'text-white font-semibold border-b-2 border-[#A67C52] pb-0.5' : 'text-white/80 hover:text-white'}
            >
              Home
            </a>
            <a
              href="/knowledge-base/browse"
              className={activeTab === 'knowledge-base' ? 'text-white font-semibold border-b-2 border-[#A67C52] pb-0.5' : 'text-white/80 hover:text-white'}
            >
              Knowledge Base
            </a>
            <a
              href="/signin"
              className={activeTab === 'signin' ? 'text-white font-semibold border-b-2 border-[#A67C52] pb-0.5' : 'text-white/80 hover:text-white'}
            >
              Sign In
            </a>
            <a
              href="/knowledge-base"
              className="hidden md:flex items-center gap-2 rounded bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition"
            >
              Add Ticket
            </a>
            <button type="button" className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white/80 hover:bg-white/10" aria-label="Information">
              <span className="text-sm font-bold">i</span>
            </button>
          </nav>
        </div>
        {showSearch && (
          <div className="max-w-6xl mx-auto px-6 pb-4">
            <input
              type="text"
              placeholder="Search articles"
              className="w-full max-w-xl rounded-lg border-0 bg-white/10 px-4 py-2.5 text-white placeholder-white/60 focus:ring-2 focus:ring-[#A67C52]"
            />
          </div>
        )}
      </header>
    </>
  );
}
