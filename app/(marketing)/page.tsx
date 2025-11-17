import { Medal } from "lucide-react";
import Link from "next/link";
import { Open_Sans, Poppins, Stack_Sans_Headline } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = Stack_Sans_Headline({
  subsets: ["latin"],
  weight: ["700"],
});

const text_font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[60vh] px-4">
      <h1 className="text-7xl md:text-8xl text-neutral-700 mb-6 font-bold">
        Move Work Forward.
      </h1>

      <p className="max-w-sm md:max-w-2xl text-lg md:text-2xl text-neutral-500">
        TrelloClone helps teams move forward. Collaborate, manage projects, and
        reach new productivity peaks. From high rises to home office, the way
        your team works is unique—accomplish it all with TrelloClone.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mt-10 w-full">
        <Button
          size="lg"
          variant="default"
          asChild
          className="text-lg md:text-2xl px-6 py-4 md:p-8 w-full md:w-auto"
        >
          <Link href="/signup">Get Started — It’s Free</Link>
        </Button>

        <Button
          size="lg"
          variant="ghost"
          asChild
          className="text-lg md:text-2xl px-6 py-4 md:p-8 w-full md:w-auto"
        >
          <Link href="/login">Log In</Link>
        </Button>
      </div>
    </div>
  );
};


export default MarketingPage;
