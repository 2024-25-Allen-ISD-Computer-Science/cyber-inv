import Nav from "@/components/Home/Nav";
import Footer from "@/components/Home/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full min-h-screen flex flex-col">
            {/* Sticky Navbar */}
            <div className="sticky top-0 z-20 bg-black/30 backdrop-blur-md w-full">
                <Nav />
            </div>

            {/* Main Content (Takes Remaining Space) */}
            <main className="flex-grow flex justify-center items-center w-full">
                {children}
            </main>

            {/* Footer (Normal Positioning) */}
            <Footer />
        </div>
    );
}
