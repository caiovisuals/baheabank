import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default function PrivateLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="pt-br">
            <body className="flex flex-row">
                <Navbar/>
                {children}
            </body>
        </html>
    );
}
