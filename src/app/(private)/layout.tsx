import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import "../globals.css"

export default function PrivateLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex flex-col w-full h-screen">
            <Header/>
            <div className="w-full h-full flex flex-col-reverse md:flex-row justify-between">
                <Navbar/>
                {children}
            </div>
        </div>
    );
}
