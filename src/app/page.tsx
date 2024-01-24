import Image from "next/image";
import OutputSection from "./components/OutputSection";
import InputSection from "./components/InputSection";
import { Button } from "./components/ui/button";
import Run from "./components/Run";

export default function Home() {
  return (
    //
    <div className="bg-lime-200 flex flex-col h-screen w-full text-muted-foreground">
      <div className="bg-background flex flex-row w-screen h-fit items-center justify-center">
        {/* heading */}
        <div className="scroll-m-20 text-4xl font-bold tracking-tight py-4 text-primary">
          Rewrite Git History
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
