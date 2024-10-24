import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import pb from "@/api/pocketbase"; // Import PocketBase
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Tmp() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Check if the user is authenticated on component mount
  useEffect(() => {
    if (!pb.authStore.isValid) {
      // If the user is not authenticated, redirect to the login page
      navigate("/login");
    }
  }, [navigate]); // Runs only once when the component mounts

  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="bg-accent rounded-3xl p-5 w-full max-w-4xl h-fit shadow-2xl">
        <div className="text-3xl text-center mb-5">Preparation</div>

        {/* Grid for Video Embeds */}
        <div className="w-full grid grid-cols-1 gap-5 place-items-center">
        <div className="text-center font-semibold mt-2">
              So what now??
            </div>
          <div className="grid grid-flow-row md:grid-cols-2 gap-5 text-3xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the location?</AccordionTrigger>
                <AccordionContent className="text-2xl">TBD</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is the price?</AccordionTrigger>
                <AccordionContent className="text-2xl">TBD</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>When does it start?</AccordionTrigger>
                <AccordionContent className="text-2xl">TBD</AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do I need prior cybersecurity knowledge?</AccordionTrigger>
                <AccordionContent className="text-2xl">TBD</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Are there any prizes?</AccordionTrigger>
                <AccordionContent className="text-2xl">TBD</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What is the schedule for the day?</AccordionTrigger>
                <AccordionContent className="text-2xl">TBD</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* First Video Embed */}
          <div className="w-full max-w-lg">
            <div className="relative overflow-hidden" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/videoseries?si=ARhkE1QeX9MPoRHl&amp;list=PLzVrhECG8ZbJJ0O5-AD8YCUbhv3ij2lC_"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <div className="text-center font-semibold mt-2">
              Hey, Check out this playlist to get you ahead for the competition.
            </div>
          </div>

          {/* Second Video Embed */}
          <div className="w-full max-w-lg">
            <div className="relative overflow-hidden" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/wjbbl0TTMeo?si=G41n8Ph3MEMJKuF2"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <div className="text-center font-semibold mt-2">
              Hey, Check out this video to set up your laptop.
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
