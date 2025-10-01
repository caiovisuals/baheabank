import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const url = req.nextUrl.clone();

    const isPrivate = [
        "/dashboard",
        "/help",
        "/piggys",
        "/settings",
    ].some((path) => req.nextUrl.pathname.startsWith(path));
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

    if (!token) {
        if (isPrivate) {
            url.pathname = "/auth/login";
            return NextResponse.redirect(url);
        }
        return NextResponse.next();
    }

    try {
        await jwtVerify(token, SECRET);

        if (isAuthPage) {
            url.pathname = "/dashboard";
            return NextResponse.redirect(url);
        }

        return NextResponse.next();
    } catch (err) {
        if (isPrivate || isAuthPage) {
            url.pathname = "/auth/login";
            const res = NextResponse.redirect(url);
            res.cookies.set("token", "", { path: "/", maxAge: 0 });
            return res;
        }
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/help",
    "/help/:path*",
    "/piggys",
    "/piggys/:path*",
    "/settings",
    "/settings/:path*",
    "/auth",
    "/auth/:path*",
    ],
};