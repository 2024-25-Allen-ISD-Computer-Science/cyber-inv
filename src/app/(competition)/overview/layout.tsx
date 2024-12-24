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
        <div className="w-full h-fit">
            <Comp1BG />
            <CompProgBar />
            {children}
        </div>
    );
}
