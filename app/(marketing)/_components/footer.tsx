import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full h-18 px-4 border-t bg-white  flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <p className="hidden md:flex">© {new Date().getFullYear()} TrelloClone. All rights reserved.</p>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button variant={"ghost"} size={"sm"}>
            Privacy Policy
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            Terms of Service
          </Button>
        </div>
      </div>
    </footer>
  );
}
