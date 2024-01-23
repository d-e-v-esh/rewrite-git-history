import { CalendarIcon } from "@radix-ui/react-icons";
import { format, setHours, setMinutes } from "date-fns";
import * as React from "react";

import { Button } from "@/app/components/ui/button";
import { Calendar } from "@/app/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { cn } from "@/lib/utils";

interface DateAndTimePickerProps {
  defaultDateAndTime: Date;
}

const DateAndTimePicker: React.FC<DateAndTimePickerProps> = ({
  defaultDateAndTime,
}) => {
  const [date, setDate] = React.useState<Date | null>(null);

  React.useEffect(() => {
    setDate(defaultDateAndTime);
  }, [defaultDateAndTime]);

  const handleDateChange = (newDate: Date | null) => {
    if (date && newDate) {
      const updatedDate = new Date(
        newDate.getFullYear(),
        newDate.getMonth(),
        newDate.getDate(),
        date.getHours(),
        date.getMinutes()
      );
      setDate(updatedDate);
    } else {
      setDate(newDate);
    }
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value;
    if (date && time) {
      const [hours, minutes] = time.split(":").map(Number);
      const updatedDate = setHours(setMinutes(date, minutes), hours);
      setDate(updatedDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
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
          onSelect={handleDateChange}
          initialFocus
        />

        <input
          defaultValue={
            date ? `${format(date, "HH")}:${format(date, "mm")}` : "12:12"
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
