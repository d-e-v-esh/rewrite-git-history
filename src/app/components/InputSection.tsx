"use client";

import { useState } from "react";
import CommitsTable from "./CommitsTable";
import DateRangePicker from "./DateRangePicker";
import { Button } from "./ui/button";
import RebaseDialog from "./RebaseDialog";

const InputSection = () => {
  return (
    <div className="bg-green-400 w-full h-full flex flex-col ">
      <div className="bg-blue-400 w-full h-20 flex items-center justify-center space-x-12">
        <RebaseDialog />
        <DateRangePicker />

        {/* <Button variant={"outline"}>Set Time Range</Button> */}
      </div>

      <div className="bg-pink-300 h-full ">
        <CommitsTable />
      </div>
    </div>
  );
};

export default InputSection;
