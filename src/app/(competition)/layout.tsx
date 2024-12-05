import { Metadata } from "next";
import CompProgBar from "@/components/nav/CompProgBar";
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
            <CompProgBar/>

            {children}
        </div>
    );
}
