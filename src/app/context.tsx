"use client";

import { ReactNode, createContext, useContext, useReducer } from "react";

export enum ActionType {
  SET_INPUT_DATA = "SET_INPUT_DATA",
  SET_OUTPUT_DATA = "SET_OUTPUT_DATA",
  SET_CURRENT_DATA = "SET_CURRENT_DATA",
}

interface SetInputDataAction {
  type: ActionType.SET_INPUT_DATA;
  payload: string;
}

interface SetOutputDataAction {
  type: ActionType.SET_OUTPUT_DATA;
  payload: string;
}

interface SetCurrentDataAction {
  type: ActionType.SET_CURRENT_DATA;
  payload: Array<{
    command: string;
    hash: string;
    commitMessage: string;
    dateAndTime: Date;
  }>;
}

type Action = SetInputDataAction | SetOutputDataAction | SetCurrentDataAction;

interface DefaultState {
  inputData: string;
  outputData: string;
  currentData: Array<{
    command: string;
    hash: string;
    commitMessage: string;
    dateAndTime: Date;
  }>;
}

const defaultState: DefaultState = {
  inputData: "",
  outputData: "",
  currentData: [],
};

export const AppContext = createContext<
  | {
      state: DefaultState;
      dispatch: (action: Action) => void;
    }
  | undefined
>(undefined);

const appReducer = (state: DefaultState, action: Action): DefaultState => {
  switch (action.type) {
    case ActionType.SET_INPUT_DATA:
      return { ...state, inputData: action.payload };

    case ActionType.SET_OUTPUT_DATA:
      return { ...state, outputData: action.payload };

    case ActionType.SET_CURRENT_DATA:
      // Assuming we want to replace the entire array
      return { ...state, currentData: action.payload };

    default:
      return state;
  }
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, defaultState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default useAppContext;
