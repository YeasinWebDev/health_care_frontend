import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import  Jwt  from "jsonwebtoken";
import { getDefaultDashboardRoute, getRouteOwner, isAuthRoute, UserRole } from "./utility/auth";
import { removeCookie } from "./services/auth/tokenHandler";

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const accessToken = request.cookies.get("accessToken")?.value;

    let userRole : UserRole | null = null;

    if(accessToken){
        try {
            const decodedToken = Jwt.decode(accessToken) as Jwt.JwtPayload;
            userRole = decodedToken.role as UserRole;
        } catch (error) {
            console.log(error);
            await removeCookie("accessToken");
            await removeCookie("refreshToken");
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    const routeOwner = getRouteOwner(pathname);

    const isAuth = isAuthRoute(pathname);

    if(accessToken && isAuth){
        return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url));
    }

    if(routeOwner === null){
        return NextResponse.next();
    }

    if(!accessToken){
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }

    if(routeOwner === "COMMON"){
        return NextResponse.next();
    }

    if(routeOwner === "ADMIN" || routeOwner === "DOCTOR" || routeOwner === "PATIENT"){
        if(userRole !== routeOwner){
            return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url));
        }
    }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
