import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface startState {
  on: boolean;
  result: boolean;
}

const initialState: startState = {
  on: false,
  result: false,
};

export const startSlice = createSlice({
  name: "startReducers",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setOn: (state) => {
      return { ...state, on: true };
    },
    setOff: (state) => {
      return { ...state, on: false };
    },
    setResultOn: (state) => {
      return { ...state, result: true };
    },
    setResultOff: (state) => {
      return { ...state, result: false };
    },
  },
});

export const { setOn, setOff, setResultOff, setResultOn } = startSlice.actions;

export const selectStart = (state: RootState) => state.startReducers;

export default startSlice.reducer;
