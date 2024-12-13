import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface competitionState {
  mode?: "on" | "off";
  level?: number;
  result?: number;
}

const initialState: competitionState = {
  mode: "off",
  level: 18,
};

export const competitionSlice = createSlice({
  name: "competitionReducers",
  initialState,
  reducers: {
    setCompetition: (state, action: PayloadAction<competitionState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setCompetition } = competitionSlice.actions;

export const selectCompetition = (state: RootState) =>
  state.competitionReducers;

export default competitionSlice.reducer;
