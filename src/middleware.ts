import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware function to check for auth cookie and handle redirection
export function middleware(request: NextRequest) {
    // Get the cookie from the request headers
    const authToken = request.cookies.get('auth_token');

    const { pathname } = request.nextUrl;

    // If the user is trying to access the login page and is already authenticated, redirect to the dashboard
    if (pathname === '/login' && authToken?.value) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // If no auth cookie and trying to access the dashboard, redirect to login page
    if (!authToken?.value && pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // If the user is authenticated and accessing other routes, allow the request to proceed
    return NextResponse.next();
}

// Configuration to match routes containing "admin/dashboard" or "admin/login" in the URL
export const config = {
    matcher: ['/dashboard/:path*', '/login'],
}
