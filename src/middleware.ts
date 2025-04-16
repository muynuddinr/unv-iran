import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Add this console log to debug
  console.log('Middleware path:', path);
  console.log('Cookie:', request.cookies.get('admin_token'));

  // Check if the path is an admin path (except login)
  if (path.startsWith('/admin') && !path.startsWith('/admin-login')) {
    const token = request.cookies.get('admin_token')?.value;
    
    if (!token) {
      const loginUrl = new URL('/admin-login', request.url);
      return NextResponse.redirect(loginUrl);
    }
    
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      console.error('Token verification failed:', error);
      const loginUrl = new URL('/admin-login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Handle root admin redirect
  if (path === '/admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

// Add config to specify paths
export const config = {
  matcher: ['/admin/:path*', '/admin-login']
};