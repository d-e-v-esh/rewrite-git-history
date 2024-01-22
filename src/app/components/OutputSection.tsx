"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";

import AceEditor from "react-ace";
import { ScrollArea } from "./ui/scroll-area";
import GitHubCalendar from "react-github-calendar";

const OutputSection = () => {
  function onChange(newValue: string) {
    console.log("change", newValue);
  }
  return (
    <div>
      <div>
        <AceEditor
          mode="bash"
          width="40vw"
          height="75vh"
          theme="dark"
          onChange={onChange}
          name="REBASE_OUTPUT"
          fontSize={24}
          editorProps={{ $blockScrolling: false }}
        />
      </div>

      <GitHubCalendar username="grubersjoe" />
    </div>
  );
};

export default OutputSection;
