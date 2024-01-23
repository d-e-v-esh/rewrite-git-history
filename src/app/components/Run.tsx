"use client";

import useAppContext, { ActionType } from "../context";
import { Button } from "./ui/button";

const Run = () => {
  const { state, dispatch } = useAppContext();

  return (
    <div>
      <Button
        onClick={() => {
          dispatch({
            type: ActionType.SET_OUTPUT_DATA,
            payload: JSON.stringify(state.currentData, null, 2),
          });
        }}>
        Run
      </Button>
    </div>
  );
};

export default Run;
