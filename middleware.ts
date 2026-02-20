import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Redirects all routes except /portfolio to the portfolio page.
 * To re-enable the full site: delete this file or remove the redirect logic.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow /portfolio and its subpaths
  if (pathname.startsWith('/portfolio')) {
    return NextResponse.next();
  }

  // Allow Next.js internals and static assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/videos') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.') // e.g. .ico, .svg, .png
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to /portfolio
  const url = request.nextUrl.clone();
  url.pathname = '/portfolio';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next (Next.js internals)
     * - static files (files with extensions)
     */
    '/((?!_next/|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
