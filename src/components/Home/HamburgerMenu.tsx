import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

const smoothScrolling = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}

export default function Menu() {
  return (
      <div className="justify-right m-2 flex w-full">
          <Sheet modal={false}>
              <SheetTrigger asChild>
                  <Button variant="outline">
                      <HamburgerMenuIcon />
                  </Button>
              </SheetTrigger>
              <SheetContent>
                  <SheetHeader>
                      <SheetTitle></SheetTitle>
                  </SheetHeader>
                  {['Sponsors', 'FAQ', 'Last Year', 'Meet the Team'].map((text) => {
                      const href = `#${text.toLowerCase().replace(/\s+/g, '-')}`;
                      const scrollTo = href.replace('#', '');

                      return (
                          <a
                              onClick={(e) => {
                                  e.preventDefault();
                                  window.history.pushState(null, '', href);
                                  smoothScrolling(scrollTo);
                              }}
                              href={href}
                              key={text}
                          >
                              <div className="p-5 text-lg md:text-2xl" key={text}>
                                  <div className="navbar">{text}</div>
                              </div>
                          </a>
                      );
                  })}
              </SheetContent>
          </Sheet>
      </div>
  );
}
