import Image from "next/image";
import OutputSection from "./components/OutputSection";
import InputSection from "./components/InputSection";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col bg-purple-500 w-screen h-screen">
      <div className="flex flex-row bg-red-500 w-screen h-24 items-center justify-center">
        {/* heading */}
        Rewrite Git History
      </div>
      <div className="bg-gray-400  flex flex-row w-screen h-full">
        <div className="bg-slate-400 w-1/2 h-full items-center justify-center flex">
          <InputSection />
        </div>

        <div className="bg-teal-500 w-24 flex items-center justify-center">
          <Button>Run</Button>
        </div>
        <div className="bg-gray-600 w-1/2 h-full flex items-center justify-center">
          <OutputSection />
        </div>
      </div>

      <div className="h-12 flex items-center justify-center">Made with ❤️</div>
    </div>
  );
}
