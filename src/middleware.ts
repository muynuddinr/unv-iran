import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Special case for /admin (without trailing slash)
  if (path === '/admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }
  
  // Only protect admin routes that aren't the login page
  if (path.startsWith('/admin') && !path.includes('admin-login')) {
    const token = request.cookies.get('admin_token')?.value;
    
    // For debugging - log the token
    console.log('Found token:', !!token);
    
    if (!token) {
      console.log('No token found, redirecting to login');
      return NextResponse.redirect(new URL('/admin-login', request.url));
    }
    
    try {
      // Verify the token
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');
      await jwtVerify(token, secret);
      console.log('Token verified successfully');
      return NextResponse.next();
    } catch (error) {
      console.error('Token verification failed:', error);
      return NextResponse.redirect(new URL('/admin-login', request.url));
    }
  }
  
  // For all other routes, just continue
  return NextResponse.next();
}

// Make sure the matcher is correctly set
export const config = {
  matcher: [
    '/admin',
    '/admin/:path*'
  ],
};