"use client";

import useAppContext from "../context";
import { Button } from "./ui/button";

const Run = () => {
  const { state, dispatch } = useAppContext();

  return (
    <div>
      <Button
        onClick={() => {
          console.log("runrun");
        }}>
        Run
      </Button>
    </div>
  );
};

export default Run;
