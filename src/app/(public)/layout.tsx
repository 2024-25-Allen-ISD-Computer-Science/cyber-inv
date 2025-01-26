import Nav from "@/components/Home/Nav";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* Navbar */}
            <div className="sticky top-0 z-20 bg-black/30 backdrop-blur-md w-full">
                <Nav />
            </div>
        
        <div className="w-full h-full flex flex-col">

            {/* Main Content */}
            <div className="flex-grow w-full">
                {children}
            </div>
        </div>
        </>
    );
}