import QueueBar from "@/components/Navbar/QueueBar";
export default function queueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <QueueBar />
      {children}
    </div>
  );
}
