import "./globals.css";

export default function PrincipalLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="pt-br">
            <body className="size-full">
                {children}
            </body>
        </html>
    );
}

