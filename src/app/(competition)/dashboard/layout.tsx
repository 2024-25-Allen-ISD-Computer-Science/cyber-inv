import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="w-full h-full">
                <div className="fixed top-4 left-4 z-20">
                    <SidebarTrigger />
                </div>
                {children}
            </div>
        </SidebarProvider>
    )
}
