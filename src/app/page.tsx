import Image from "next/image";
import OutputSection from "./components/OutputSection";
import InputSection from "./components/InputSection";
import { Button } from "./components/ui/button";
import Run from "./components/Run";

export default function Home() {
  return (
    //
    <div className="bg-slate-400 flex flex-col h-screen w-full">
      <div className="bg-red-300 flex flex-row w-screen h-fit items-center justify-center">
        {/* heading */}
        <div className="py-4">Rewrite Git History</div>
      </div>
      <div className="bg-red-400  flex flex-row flex-grow w-screen h-fit">
        <div className=" w-full h-full items-center justify-center flex">
          <InputSection />
        </div>

        <div className="bg-lime-300 w-[10%] flex items-center justify-center">
          <Run />
        </div>
        <div className="w-full h-min flex items-center justify-center">
          <OutputSection />
        </div>
      </div>

      <div className=" bg-teal-300 h-fit flex items-center justify-center ">
        <div className="py-2">Made with ❤️</div>
      </div>
    </div>
  );
}
