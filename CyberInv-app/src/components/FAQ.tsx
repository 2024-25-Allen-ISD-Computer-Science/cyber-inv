import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

  export default function FAQ() {
    return (
      <div className="grid grid-flow-row md:grid-cols-2 gap-8 text-3xl items-center">
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
            <AccordionTrigger>
              Do I need prior cybersecurity knowledge?
            </AccordionTrigger>
            <AccordionContent className="text-2xl">TBD</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Are there any prizes?</AccordionTrigger>
            <AccordionContent className="text-2xl">TBD</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What is the schedule for the day?
            </AccordionTrigger>
            <AccordionContent className="text-2xl">TBD</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }