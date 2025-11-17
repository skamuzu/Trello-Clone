import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-18 px-4 border-b shadow-sm bg-slate-100 flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button variant={"outline"} size={"lg"} asChild className="text-xl p-6">
            <Link href="/login">Log In</Link>
          </Button>
          <Button size={"lg"} variant={"default"} asChild className="text-xl p-6">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
