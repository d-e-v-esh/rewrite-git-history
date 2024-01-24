"use client";

import { useState } from "react";
import CommitsTable from "./CommitsTable";
import DateRangePicker from "./DateRangePicker";
import { Button } from "./ui/button";
import RebaseDialog from "./RebaseDialog";

const InputSection = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-background w-full p-4 h-fit flex items-center justify-center space-x-12">
        <RebaseDialog />
        <DateRangePicker />

        {/* <Button variant={"outline"}>Set Time Range</Button> */}
      </div>

      <div className="bg-background h-full px-4">
        <CommitsTable />
      </div>
    </div>
  );
};

export default InputSection;
