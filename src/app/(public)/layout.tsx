import Nav from "@/components/Home/Nav";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="w-full max-h-full flex flex-col">
            <div className="sticky mb-auto top-0 z-20 bg-black/30 backdrop-blur-md  w-full">
                <Nav />
            </div>

            {/* Main Content */}
            <div className="flex-grow w-full h-full">
                {children}
            </div>
        </div>
    );
}