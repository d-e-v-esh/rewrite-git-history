"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import { Calendar } from "@/app/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { Input } from "./ui/input";

function DateAndTimePicker() {
  const [date, setDate] = React.useState<Date>();

  const handleTimeChange = (event: any) => {
    const time = event.target.value;
    if (date && time) {
      const [hours, minutes] = time.split(":").map(Number);
      const updatedDate = new Date(date);
      updatedDate.setHours(hours, minutes);
      setDate(updatedDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPpp") : <span>Pick date and time</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />

        <Input type="time" onChange={handleTimeChange} />
      </PopoverContent>
    </Popover>
  );
}

export default DateAndTimePicker;
