import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
    ArrowRightStartOnRectangleIcon,
    Squares2X2Icon,
    PuzzlePieceIcon,
    ShieldExclamationIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";
import ico from "~/ico.svg";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { fetchUserCardData } from "@/api/player"
// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: Squares2X2Icon,
    },
    {
        title: "Puzzle Round",
        url: "#",
        icon: PuzzlePieceIcon,
    },
    {
        title: "Battle Round",
        url: "#",
        icon: ShieldExclamationIcon,
    },
    {
        title: "Scenario Round",
        url: "#",
        icon: SparklesIcon,
    },
];
const player = await fetchUserCardData()
export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="h-fit w-full flex-col justify-center place-content-center">
                <Image src={ico} width={100} height={100} alt="ico" className="w-full justify-center" />
                <h1 className="text-2xl font-bold text-center">ALLEN CYBER INVITATIONAL</h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Player Info</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenuItem>
                            <h1 className="text-lg font-bold">{player.TeamName}</h1>
                            <h1 className="text-lg font-bold">{player.username.join(" ")}</h1>
                            <h1 className="text-lg font-bold">{player.totalPoints}</h1>
                        </SidebarMenuItem>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Views</SidebarGroupLabel>
                    <SidebarGroupContent>

                        <SidebarMenu className="">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className="flex items-center gap-3 hover:text-violet-300">
                                            {/* Adjust icon size here */}
                                            <item.icon width={32} height={32} className="text-current" />
                                            <h1 className="text-2xl ">{item.title}</h1>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="w-full h-fit flex-col">
                <div className="text-xl font-black text-center">00:00:00</div>
                <div className="text-xl font-black text-center">Title of the round</div>
                <Link href={"#"}>
                    <Button asChild variant={"destructive"} className="w-full">
                        <ArrowRightStartOnRectangleIcon className="size-8" />
                    </Button>
                </Link>
            </SidebarFooter>
        </Sidebar>
    );
}
