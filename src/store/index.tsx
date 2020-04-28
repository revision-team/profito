import React from "react";
import { State } from "./types";
import { reducer } from "./reducer";
import { Action } from "./actions";

const initDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const initialState = {
  lang: "en",
  theme: "light",
  authenticated: true,
  notifications: [],
  dateRange: initDateRange,
  selectedRange: initDateRange,
} as State;

interface StoreType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const Store = React.createContext({} as StoreType);

const StoreProvider: React.FunctionComponent = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

export default StoreProvider;
