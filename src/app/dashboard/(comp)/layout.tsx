import Compbar from "@/components/Navbar/Compbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full inline-flex">
      {/* Sidebar */}
      <div className="h-screen w-fit">
        <Compbar />
      </div>

      {/* Main content */}
      <main className="flex-grow antialiased w-full h-full overflow-y-auto p-6 flex justify-center items-center">
        {children}
      </main>
    </div>
  );
}
