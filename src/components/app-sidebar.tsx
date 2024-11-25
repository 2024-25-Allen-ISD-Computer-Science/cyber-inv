import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"
import ico from "~/ico.svg"
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
    SidebarFooter
} from "@/components/ui/sidebar"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: Home,
    },
    {
        title: "Puzzle Round",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Battle Round",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Scenario Round",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="h-fit w-full flex-col justify-center place-content-center">
                <Image src={ico} width={100} height={100} alt="ico" className="w-full justify-center"/>
                <h1 className="text-2xl font-bold text-center">ALLEN CYBER INVITATIONAL</h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel></SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <h1 className="text-2xl">{item.title}</h1>
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

                    <Button asChild variant={"destructive"} className="w-full"><ArrowRightStartOnRectangleIcon className="size-8"/></Button>
                </Link>
            </SidebarFooter>
        </Sidebar>
    )
}
