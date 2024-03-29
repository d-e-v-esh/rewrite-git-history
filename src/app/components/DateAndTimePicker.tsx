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
import { Separator } from "./ui/separator";
import useAppContext, { ActionType } from "../context";

interface DateAndTimePickerProps {
  defaultDateAndTime: Date;
  index: number;
}

const DateAndTimePicker: React.FC<DateAndTimePickerProps> = ({
  defaultDateAndTime,
  index,
}) => {
  const [date, setDate] = React.useState<Date | null>(null);
  const { state, dispatch } = useAppContext();

  React.useEffect(() => {
    if (date) {
      const updatedData = state.currentData;
      updatedData[index].dateAndTime = date;

      () => {
        dispatch({
          type: ActionType.SET_CURRENT_DATA,
          payload: updatedData,
        });
      };
    }
  }, [date]);

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

        <Separator />

        <div className="flex items-center justify-center py-4">
          <input
            defaultValue={
              date ? `${format(date, "HH")}:${format(date, "mm")}` : "12:12"
            }
            className="bg-background p-4 outline outline-1"
            onChange={handleTimeChange}
            aria-label="Time"
            type="time"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateAndTimePicker;
