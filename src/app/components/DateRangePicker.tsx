"use client";

import { CalendarIcon, ClockIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import * as React from "react";
import { DateRange } from "react-day-picker";

import { Button } from "@/app/components/ui/button";
import { Calendar } from "@/app/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Separator } from "./ui/separator";
import useAppContext, { ActionType } from "../context";

function DateRangePicker({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const { state, dispatch } = useAppContext();
  const [date, setDate] = React.useState<DateRange | undefined>();

  console.log({ stateDate: state.dateRange });
  React.useEffect(() => {
    setDate(state.dateRange);
  }, [state.dateRange]);

  React.useEffect(() => {
    console.log({ date });
    if (date) {
      dispatch({
        type: ActionType.SET_DATE_RANGE,
        payload: date,
      });
    }
  }, [date]);

  const handleTimeFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (date && date.from) {
      const updatedFrom = new Date(
        date.from.getFullYear(),
        date.from.getMonth(),
        date.from.getDate(),
        parseInt(event.target.value.split(":")[0]),
        parseInt(event.target.value.split(":")[1])
      );
      setDate({ ...date, from: updatedFrom });
    }
  };

  const handleTimeToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (date && date.to) {
      const updatedTo = new Date(
        date.to.getFullYear(),
        date.to.getMonth(),
        date.to.getDate(),
        parseInt(event.target.value.split(":")[0]),
        parseInt(event.target.value.split(":")[1])
      );
      setDate({ ...date, to: updatedTo });
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-fit justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}

            <div className="px-4">
              <Separator orientation="vertical" className="bg-gray-400 h-4" />
            </div>

            <ClockIcon className="mr-2 h-4 w-4" />
            {/* {"00:12 - 18:14"} */}
            {date?.from
              ? `${format(date.from, "HH")}:${format(date.from, "mm")} : `
              : "12:12"}
            {date?.to
              ? `${format(date.to, "HH")}:${format(date.to, "mm")}`
              : "12:12"}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1150px] h-auto">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={4}
          />

          <div>
            <div className="flex items-center justify-center py-4 space-x-8">
              <span>from</span>
              <input
                onChange={handleTimeFromChange}
                defaultValue={
                  date?.from
                    ? `${format(date.from, "HH")}:${format(date.from, "mm")}`
                    : "12:12"
                }
                className="bg-background p-4 outline outline-1"
                aria-label="Time"
                type="time"
              />

              <span>to</span>
              <input
                onChange={handleTimeToChange}
                defaultValue={
                  date?.to
                    ? `${format(date.to, "HH")}:${format(date.to, "mm")}`
                    : "12:12"
                }
                className="bg-background p-4 outline outline-1"
                aria-label="Time"
                type="time"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DateRangePicker;
