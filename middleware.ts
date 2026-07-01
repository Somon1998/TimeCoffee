import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    process.env.NODE_ENV === "production" &&
    (pathname === "/admin" || pathname.startsWith("/admin/"))
  ) {
    return new NextResponse(null, { status: 404 });
  }

  if (pathname === "/menu" || pathname === "/menu/") {
    return NextResponse.redirect(new URL("/products", request.url));
  }

  if (pathname === "/tg/menu" || pathname === "/tg/menu/") {
    return NextResponse.redirect(new URL("/tg/products", request.url));
  }

  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/",
    "/(tg)/:path*",
    "/admin",
    "/admin/:path*",
    "/((?!api|_next|_vercel|icon|robots\\.txt|sitemap\\.xml|.*\\..*).*)",
  ],
};
