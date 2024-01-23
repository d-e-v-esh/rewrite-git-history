import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

import { Input } from "@/app/components/ui/input";
import useAppContext from "../context";
import parseGitRebaseInput from "../utils/parseGitRebaseInput";
import DateAndTimePicker from "./DateAndTimePicker";
import SelectCommand from "./SelectCommand";
import DataTable from "./DataTable";

export type Commit = {
  hash: string;
  commitMessage: string;
  command: string;
  // command: "pick" | "reword" | "edit" | "squash";
};

// const data: Commit[] = [
//   { hash: "000000", command: "pick", commitMessage: "feat: add component 0" },
//   { hash: "000001", command: "pick", commitMessage: "feat: add component 1" },
//   { hash: "000002", command: "pick", commitMessage: "feat: add component 2" },
//   { hash: "000003", command: "pick", commitMessage: "feat: add component 3" },
//   { hash: "000004", command: "pick", commitMessage: "feat: add component 4" },
//   { hash: "000005", command: "pick", commitMessage: "feat: add component 5" },
//   { hash: "000006", command: "pick", commitMessage: "feat: add component 6" },
//   { hash: "000007", command: "pick", commitMessage: "feat: add component 7" },
//   { hash: "000008", command: "pick", commitMessage: "feat: add component 8" },
//   { hash: "000009", command: "pick", commitMessage: "feat: add component 9" },
//   { hash: "00000a", command: "pick", commitMessage: "feat: add component 10" },
//   { hash: "00000b", command: "pick", commitMessage: "feat: add component 11" },
//   { hash: "00000c", command: "pick", commitMessage: "feat: add component 12" },
//   { hash: "00000d", command: "pick", commitMessage: "feat: add component 13" },
//   { hash: "00000e", command: "pick", commitMessage: "feat: add component 14" },
//   { hash: "00000f", command: "pick", commitMessage: "feat: add component 15" },
//   { hash: "000010", command: "pick", commitMessage: "feat: add component 16" },
//   { hash: "000011", command: "pick", commitMessage: "feat: add component 17" },
//   { hash: "000012", command: "pick", commitMessage: "feat: add component 18" },
//   { hash: "000013", command: "pick", commitMessage: "feat: add component 19" },
//   { hash: "000014", command: "pick", commitMessage: "feat: add component 20" },
//   { hash: "000015", command: "pick", commitMessage: "feat: add component 21" },
//   { hash: "000016", command: "pick", commitMessage: "feat: add component 22" },
//   { hash: "000017", command: "pick", commitMessage: "feat: add component 23" },
//   { hash: "000018", command: "pick", commitMessage: "feat: add component 24" },
// ];

export const columns: ColumnDef<Commit>[] = [
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
    cell: () => (
      <div>
        <SelectCommand />
      </div>
    ),
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
      const commitMessage: string = row.getValue("commitMessage");
      return (
        <div>
          <Input defaultValue={commitMessage} />
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date And Time",
    cell: () => (
      <div>
        <DateAndTimePicker />
      </div>
    ),
  },
];

const CommitsTable = () => {
  const { state } = useAppContext();
  const data = parseGitRebaseInput(state.inputData);

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default CommitsTable;
