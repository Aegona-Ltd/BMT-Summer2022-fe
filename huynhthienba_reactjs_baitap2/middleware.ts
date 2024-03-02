import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated: string | undefined =
    request.cookies.get("isAuthenticated")?.value;
    
  if (
    isAuthenticated !== "true" &&
    !(request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (
    isAuthenticated === "true" &&
    request.nextUrl.pathname === "/login"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
