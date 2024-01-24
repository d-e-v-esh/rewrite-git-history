"use client";

import { useEffect, useState, useRef } from "react";
import AceEditor from "react-ace";
import useAppContext from "../context";
import convertJsonToGit from "../utils/parseJsonToGit";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-twilight";
import { Button } from "./ui/button";
import { ToastAction } from "@/app/components/ui/toast";
import { useToast } from "@/app/components/ui/use-toast";

const OutputSection = () => {
  const { state } = useAppContext();
  const [outputData, setOutputData] = useState<string>("");
  const aceEditorRef = useRef<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const gitString = convertJsonToGit(state.currentData);
    setOutputData(gitString);
    if (aceEditorRef.current) {
      aceEditorRef.current.editor.setValue(gitString, -1);
    }
  }, [state.outputData]);

  function copyOutputToClipboard() {
    if (outputData) {
      navigator.clipboard.writeText(outputData);

      toast({
        description: "Commands copied to clipboard",
      });
    }
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-background w-full p-4 h-fit flex items-center justify-center outline outline-1">
        <Button onClick={copyOutputToClipboard}>Copy To Clipboard</Button>
      </div>

      <div className="bg-background flex items-center justify-center h-full px-4 outline outline-1">
        <div className="p-4">
          <AceEditor
            ref={aceEditorRef}
            theme="twilight"
            mode="markdown"
            width="42vw"
            height="72vh"
            readOnly
            defaultValue={outputData}
            name="REBASE_OUTPUT"
            fontSize={18}
            editorProps={{ $blockScrolling: false }}
          />
        </div>
      </div>
      {/* <GitHubCalendar username="grubersjoe" /> */}
    </div>
  );
};

export default OutputSection;
