import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Add this at the top of your middleware function
  console.log('Request path:', path);
  console.log('Cookies:', JSON.stringify(Object.fromEntries(request.cookies)));
  
  // Special case for /admin (without trailing slash)
  if (path === '/admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }
  
  // Only protect admin routes that aren't the login page
  if (path.startsWith('/admin') && !path.includes('admin-login')) {
    const token = request.cookies.get('admin_token')?.value;
    
    // Handle missing token
    if (!token) {
      return NextResponse.redirect(new URL('/admin-login', request.url));
    }
    
    try {
      // Verify token with more lenient error handling
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      console.error('Token verification failed:', error);
      
      // Remove bad token
      const response = NextResponse.redirect(new URL('/admin-login', request.url));
      response.cookies.delete('admin_token');
      return response;
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