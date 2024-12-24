import { Metadata } from "next";
import CompProgBar from "@/components/nav/CompProgBar";
import Comp1BG from "@/components/Comp1BG";

export const metadata: Metadata = {
    title: 'ACI-comp',
    description: 'Comp software',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-full">
            <Comp1BG />
        <div className="z-10 absolute w-full justify-center top-0 left-0">
             <CompProgBar />
        </div> 
            {children}
        </div>
    );
}
