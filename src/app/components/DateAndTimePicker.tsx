"use client";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import * as React from "react";

import { Button } from "@/app/components/ui/button";
import { Calendar } from "@/app/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { cn } from "@/lib/utils";

const DateAndTimePicker = ({
  defaultDateAndTime,
}: {
  defaultDateAndTime: Date;
}) => {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    setDate(defaultDateAndTime);
  }, []);

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

        <input
          defaultValue={
            date ? `${format(date, "H")}:${format(date, "m")}` : "12:12"
          }
          onChange={handleTimeChange}
          aria-label="Time"
          type="time"
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateAndTimePicker;
