"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

const SelectCommand = () => {
  const [command, setCommand] = React.useState("pick");

  return (
    <Select
      onValueChange={(value) => {
        setCommand(value);
      }}
      defaultValue={"pick"}>
      <SelectTrigger className="w-[110px]">
        <SelectValue placeholder="Command" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="pick">Pick</SelectItem>
          <SelectItem value="reword">Reword</SelectItem>
          <SelectItem value="edit">Edit</SelectItem>
          <SelectItem value="squash">Squash</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCommand;
