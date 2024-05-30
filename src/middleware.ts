import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

// Create the middleware with locale settings
const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['kg', 'ru', ],
  // Used when no locale matches
  defaultLocale: 'ru',
});

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Clone the request headers and modify them
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-next-pathname', request.nextUrl.pathname);

  // Return a response with the updated headers
  const newResponse = new NextResponse(response.body, response);
  newResponse.headers.set('x-next-pathname', request.nextUrl.pathname);
  return newResponse;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(kg|ru|)/:path*'],
};
