import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const VALID_LANGUAGE_VALUES = ["en", "es"] as const;

export function middleware(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang");

  if (
    !lang ||
    !VALID_LANGUAGE_VALUES.includes(lang as (typeof VALID_LANGUAGE_VALUES)[number])
  ) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  response.cookies.set("barbara-lang", lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 180,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|opengraph-image|.*\\.(?:svg|png|jpg|jpeg|webp|gif)).*)",
  ],
};
