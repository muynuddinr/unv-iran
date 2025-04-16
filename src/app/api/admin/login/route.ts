import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

// Admin credentials stored in environment variables
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Check if credentials match
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Create a JWT token
      const token = jwt.sign(
        { 
          email,
          role: 'admin',
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 24 hours
        },
        JWT_SECRET
      );

      // Set the token in a cookie
      const cookieStore = await cookies();
      cookieStore.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
        sameSite: 'strict',
      });

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'An error occurred during login' }, { status: 500 });
  }
}