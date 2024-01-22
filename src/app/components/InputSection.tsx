"use client";

import CommitsTable from "./CommitsTable";
import DateRangePicker from "./DateRangePicker";

const InputSection = () => {
  function onChange(newValue: string) {
    console.log("change", newValue);
  }
  return (
    <div className="bg-green-400 w-full h-full flex flex-col ">
      <div className="bg-blue-400 w-full h-20 flex items-center justify-center">
        <DateRangePicker />
      </div>

      <div className="bg-pink-300 h-full ">
        <CommitsTable />
      </div>
    </div>
  );
};

export default InputSection;
