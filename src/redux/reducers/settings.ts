import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface settingsState {
  steps?: number;
  interval?: number;
  range?: number;
}

const initialState: settingsState = {
  steps: 5,
  interval: 3,
  range: 10,
};

export const settingsSlice = createSlice({
  name: "settingsReducers",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<settingsState>) => {
      console.log(action);
      return { ...state, ...action.payload };
    },
  },
});

export const { setSettings } = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settingsReducers;

export default settingsSlice.reducer;
