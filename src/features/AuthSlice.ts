import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoggedInUserProps } from "../models/types.models";

type InitialStateProps = {
  user: LoggedInUserProps | null;
};

const initialState: InitialStateProps = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<LoggedInUserProps>) => {
      state.user = action.payload;
    },
    loggedOut: (state) => {
      state.user = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { loggedIn, loggedOut } = authSlice.actions;
