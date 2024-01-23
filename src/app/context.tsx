"use client";

import { ReactNode, createContext, useContext, useReducer } from "react";

export enum ActionType {
  SET_INPUT_DATA = "SET_INPUT_DATA",
  SET_OUTPUT_DATA = "SET_OUTPUT_DATA",
  SET_CURRENT_DATA = "SET_CURRENT_DATA",
}

interface Action {
  type: ActionType;
  payload: string;
}

interface DefaultState {
  inputData: string;
  outputData: Object;
  currentData: Object;
}

const defaultState = {
  inputData: "",
  outputData: {},
  currentData: {},
};

export const AppContext = createContext<
  | {
      state: DefaultState;
      dispatch: (action: Action) => void;
    }
  | undefined
>(undefined);

const appReducer = (state: DefaultState, action: Action) => {
  switch (action.type) {
    case "SET_INPUT_DATA":
      return { ...state, inputData: action.payload };

    case "SET_OUTPUT_DATA":
      return { ...state, outputData: action.payload };

    case "SET_CURRENT_DATA":
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
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

export default useAppContext;
