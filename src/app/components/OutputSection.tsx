"use client";

import { useEffect, useState, useRef } from "react";
import AceEditor from "react-ace";
import useAppContext from "../context";
import convertJsonToGit from "../utils/parseJsonToGit";

const OutputSection = () => {
  const { state } = useAppContext();
  const [outputData, setOutputData] = useState<string>("");
  const aceEditorRef = useRef<any>(null);

  useEffect(() => {
    const gitString = convertJsonToGit(state.currentData);
    setOutputData(gitString);
    if (aceEditorRef.current) {
      aceEditorRef.current.editor.setValue(gitString, -1);
    }
  }, [state.outputData]);

  return (
    <div>
      <div>
        <AceEditor
          ref={aceEditorRef}
          mode="json"
          width="40vw"
          height="75vh"
          theme="dark"
          readOnly
          defaultValue={outputData}
          name="REBASE_OUTPUT"
          fontSize={24}
          editorProps={{ $blockScrolling: false }}
        />
      </div>
      {/* <GitHubCalendar username="grubersjoe" /> */}
    </div>
  );
};

export default OutputSection;
