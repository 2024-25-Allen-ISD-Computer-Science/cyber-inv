import type { Metadata } from "next";
import "@/app/globals.css";
import HomeBar from "@/components/Navbar/HomeBar"; // Assuming you have this Navbar component

export const metadata: Metadata = {
  title: "ACI",
  description: "Allen Cyber Invitational",
};
export default function AdvertLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" bg-gradient-to-r from-gray-900 to-black  antialiased w-full h-full">
      <HomeBar />

      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
    </section>
  );
}
