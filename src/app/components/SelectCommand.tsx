"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import useAppContext, { ActionType } from "../context";

const SelectCommand = ({
  defaultValue,
  index,
}: {
  defaultValue: string;
  index: number;
}) => {
  const [command, setCommand] = React.useState<string>("");
  const { state, dispatch } = useAppContext();

  React.useEffect(() => {
    if (command) {
      const updatedData = state.currentData;
      updatedData[index].command = command;

      () => {
        dispatch({
          type: ActionType.SET_CURRENT_DATA,
          payload: updatedData,
        });
      };
    }
  }, [command]);

  React.useEffect(() => {
    setCommand(defaultValue);
  }, [defaultValue]);

  const listOptions: Record<string, string> = {
    pick: "Pick",
    reword: "Reword",
    edit: "Edit",
    squash: "Squash",
  };

  return (
    <Select
      defaultValue={command}
      onValueChange={(value) => {
        setCommand(value);
      }}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder={listOptions[command]} />
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
