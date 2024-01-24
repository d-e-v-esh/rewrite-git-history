"use client";

import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import ReactAce from "react-ace/lib/ace";
import useAppContext, { ActionType } from "../context";
import { useState } from "react";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-twilight";

const RebaseDialog = () => {
  const { state, dispatch } = useAppContext();
  const [inputData, setInputData] = useState(state.inputData);

  function onChange(newValue: string) {
    setInputData(newValue);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Enter Rebase Text</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1200px]">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();

            dispatch({
              type: ActionType.SET_INPUT_DATA,
              payload: inputData,
            });
          }}>
          <DialogHeader>
            <DialogTitle>Rebase Script</DialogTitle>
            <DialogDescription>
              Paste the rebase script your terminal
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <ReactAce
              mode="markdown"
              theme="twilight"
              width="60full"
              height="75vh"
              defaultValue={state.inputData}
              onChange={onChange}
              name="REBASE_OUTPUT"
              fontSize={18}
              editorProps={{ $blockScrolling: false }}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RebaseDialog;
