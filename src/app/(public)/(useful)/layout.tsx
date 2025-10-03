import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";

export default function UsefulLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex flex-col">
            <PublicHeader/>
            {children}
            <PublicFooter/>
        </div>
    );
}
