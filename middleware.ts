import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    const url = req.nextUrl.clone();

    if (!token) {
        if (req.nextUrl.pathname.startsWith("/private")) {
        url.pathname = "/auth/login";
        return NextResponse.redirect(url);
        }
        return NextResponse.next();
    }

    try {
        await jwtVerify(token, SECRET);
        
        if (req.nextUrl.pathname.startsWith("/auth")) {
        url.pathname = "/private/dashboard";
        return NextResponse.redirect(url);
        }

        return NextResponse.next();
    } catch (e) {
        const res = NextResponse.redirect("/auth/login");
        res.cookies.set("token", "", { path: "/", maxAge: 0 });
        return res;
    }
}

export const config = {
    matcher: [
        "/private/:path*",
        "/auth/:path*",
    ],
};
