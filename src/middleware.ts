import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

export const config = {
  matcher: ["/manage/:path*", "/api/manage/:path*"],
};

const PUBLIC_PATHS = ["/manage/login", "/api/manage/login"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.some((path) => pathname === path)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const isValid = token ? await verifySessionToken(token) : false;

  if (!isValid) {
    if (pathname.startsWith("/api/manage")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const loginUrl = new URL("/manage/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
