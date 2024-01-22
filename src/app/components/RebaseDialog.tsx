"use client";

import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useState } from "react";
import ReactAce from "react-ace/lib/ace";

const RebaseDialog = () => {
  const [inputData, setInputData] = useState("");

  // TODO: Set inputData to global state

  function onChange(newValue: string) {
    setInputData(newValue);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Enter Rebase Text</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1200px]">
        <DialogHeader>
          <DialogTitle>Rebase Script</DialogTitle>
          <DialogDescription>
            Paste the rebase script your terminal
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <ReactAce
            mode="bash"
            width="60full"
            height="75vh"
            theme="dark"
            onChange={onChange}
            name="REBASE_OUTPUT"
            fontSize={18}
            editorProps={{ $blockScrolling: false }}
          />
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RebaseDialog;
