import { Metadata } from "next";

export const metadata: Metadata = {
    description: "O gigante do financeiro baiano! Transações e investimentos pelo app, cartões com benefícios exclusivos, rendimentos incríveis e taxas imbatíveis.",
    keywords: [
        "caio visuals", "fintech", "banco digital",
    ],
    alternates: { 
        languages: {
          'pt-BR': '/'
        }
    },
};

export default function PublicLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div>
            {children}
        </div>
    );
}
