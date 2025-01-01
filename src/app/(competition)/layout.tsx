import { Metadata } from "next";
import CompProgBar from "@/components/nav/CompProgBar";
import Comp1BG from "@/components/Comp1BG";
import { getRound } from "./action";
import { round } from "@/types";
export const metadata: Metadata = {
    title: 'ACI-comp',
    description: 'Comp software',
};
const roundInfo:round = await getRound()
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-fit">
            <Comp1BG />
            <CompProgBar 
                timeRemaining={roundInfo.roundEnd}
                roundName={roundInfo.roundName}
            />
            {children}
        </div>
    );
}
