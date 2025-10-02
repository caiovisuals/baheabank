import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baheabank - O gigante do financeiro baiano!",
  description: "",
};

export default function PublicLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div>
            {children}
        </div>
    );
}
