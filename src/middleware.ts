import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Handling /admin exact path
  if (path === '/admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }
  
  // Check if the path is an admin path (except login)
  if (path.startsWith('/admin') && !path.startsWith('/admin-login')) {
    const token = request.cookies.get('admin_token')?.value;
    
    // If there's no token, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL('/admin-login', request.url));
    }
    
    try {
      // Verify the token using jose
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');
      await jwtVerify(token, secret);
      
      // If token is valid, continue
      return NextResponse.next();
    } catch (error) {
      // If token is invalid, redirect to login
      console.error('Invalid token:', error);
      return NextResponse.redirect(new URL('/admin-login', request.url));
    }
  }
  
  return NextResponse.next();
}

// Update matcher to catch all admin routes
export const config = {
  matcher: ['/admin', '/admin/:path*'],
};