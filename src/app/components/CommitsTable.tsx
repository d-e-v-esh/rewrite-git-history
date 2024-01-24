"use client";

import { useEffect, useState } from "react";
import useAppContext, { ActionType } from "../context";
import parseGitRebaseInput from "../utils/parseGitRebaseInput";
import DataTable from "./DataTable";
import { ColumnDef } from "@tanstack/react-table";
import SelectCommand from "./SelectCommand";
import { Input } from "./ui/input";
import DateAndTimePicker from "./DateAndTimePicker";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

const CommitsTable = () => {
  const { state, dispatch } = useAppContext();
  const [currentDataArray, setCurrentDataArray] = useState<Commit[]>([]);

  useEffect(() => {
    console.log({ CR: state.currentData });

    dispatch({
      type: ActionType.SET_CURRENT_DATA,
      payload: currentDataArray,
    });
  }, [currentDataArray, dispatch]);

  useEffect(() => {
    const convertedJSON = parseGitRebaseInput(state.inputData);

    dispatch({
      type: ActionType.SET_CURRENT_DATA,
      payload: convertedJSON,
    });

    setCurrentDataArray(convertedJSON);
  }, [state.inputData, dispatch]);

  type Commit = {
    hash: string;
    commitMessage: string;
    command: string;
    dateAndTime: Date;
    // command: "pick" | "reword" | "edit" | "squash";
  };

  const columns: ColumnDef<Commit>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "command",
      header: "Command",
      cell: ({ row }) => {
        const index = row.index;

        const command = state.currentData[index].command;

        return (
          <div>
            <SelectCommand index={index} defaultValue={command} />
          </div>
        );
      },
    },

    {
      accessorKey: "hash",
      header: "Hash",
      cell: ({ row }) => {
        const hash: string = row.getValue("hash");

        return <div>{hash}</div>;
      },
    },
    {
      accessorKey: "commitMessage",
      header: "Commit Message",
      cell: ({ row }) => {
        const index = row.index;
        const commitMessage = state.currentData[index].commitMessage;

        return (
          <div>
            <Input
              onChange={(e) => {
                currentDataArray[index].commitMessage = e.target.value;
              }}
              defaultValue={commitMessage}
            />
          </div>
        );
      },
    },
    {
      accessorKey: "date",
      header: "Date And Time",
      cell: ({ row }) => {
        const index = row.index;
        const dateAndTime = state.currentData[index].dateAndTime;
        return (
          <div>
            <DateAndTimePicker index={index} defaultDateAndTime={dateAndTime} />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={state.currentData} />
    </div>
  );
};

export default CommitsTable;
