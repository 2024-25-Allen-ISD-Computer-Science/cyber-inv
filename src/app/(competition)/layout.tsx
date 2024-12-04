import CompBar from "@/components/nav/CompBar";
import { Metadata } from "next";
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
        {/* <CompBar/> */}
            {children}
        </div>
    );
}
