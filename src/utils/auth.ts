export function getUserToken(): string | null {
    if (typeof window === "undefined") return null;
    const cookie = document.cookie || "";
    const token = cookie.split("token=")[1]?.split(";")[0];
    return token || null;
}

export function isUserLogged(): boolean {
    const token = getUserToken();
    return !!token;
}