import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const TOKEN_KEY = "admin_token";

// Define the routes that need protection
// For example, protecting the main POS, Kitchen, and Admin dashboard
const protectedRoutes = ["/pos", "/kitchen", "/admin/dashboard", "/order"];

// Define the public auth routes so logged in users don't see login again
const authRoutes = ["/admin/login", "/admin/register"];

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Exclude static files, API routes, Next.js internals
    if (path.startsWith("/_next") || path.startsWith("/api") || path.includes(".")) {
        return NextResponse.next();
    }

    // Check if current route is protected
    const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));
    const isAuthRoute = authRoutes.some((route) => path.startsWith(route));

    // Get token from cookies
    const token = request.cookies.get(TOKEN_KEY)?.value;

    // Redirect to login if accessing protected route without token
    if (isProtectedRoute && !token) {
        const url = new URL("/admin/login", request.url);
        // You can optionally pass the redirect url as a query param
        // url.searchParams.set("callbackUrl", encodeURI(path));
        return NextResponse.redirect(url);
    }

    // Redirect to dashboard (or pos) if accessing login/register while logged in
    if (isAuthRoute && token) {
        return NextResponse.redirect(new URL("/pos", request.url));
    }

    return NextResponse.next();
}

// Optional: config with matcher to narrow down when the middleware runs
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
