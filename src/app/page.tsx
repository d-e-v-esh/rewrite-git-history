import Image from "next/image";
import OutputSection from "./components/OutputSection";

import InputSection from "./components/InputSection";
import { Button } from "./components/ui/button";
import Run from "./components/Run";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    //
    <div className="bg-lime-200 flex flex-col h-screen w-full text-muted-foreground">
      <div className="bg-background flex flex-row w-screen h-fit items-center justify-center">
        {/* heading */}
        <div className="text-4xl font-bold tracking-tight py-4 px-12 text-primary flex-grow">
          Rewrite Git History
        </div>
        <div className="left-0 px-12">
          <Link
            href={"https://github.com/d-e-v-esh/rewrite-git-history"}
            rel="noopener noreferrer"
            target="_blank">
            <Button variant={"ghost"} className="w-fit h-fit rounded-full">
              <GitHubLogoIcon className="h-10 w-8" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-background  flex flex-row flex-grow w-screen h-fit outline outline-2">
        <div className=" w-full h-full items-center justify-center flex">
          <InputSection />
        </div>

        <div className="bg-background w-[10%] flex items-center justify-center outline outline-1">
          <Run />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <OutputSection />
        </div>
      </div>

      <div className=" bg-background h-fit flex items-center justify-center outline outline-1">
        <div className="py-2">Made with ❤️</div>
      </div>
    </div>
  );
}
