"use client";

import * as React from "react";
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";

import {cn} from "@libs/utils";
import {Button} from "@components/shad.ui/button";
import {Calendar} from "@components/shad.ui/calendar";
import {Popover, PopoverContent, PopoverTrigger} from "@components/shad.ui/popover";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
      </PopoverContent>
    </Popover>
  );
}
