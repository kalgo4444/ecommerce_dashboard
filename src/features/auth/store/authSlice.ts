import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getLocal, removeLocal, setLocal } from "../../../shared/helper";
import type { IUser } from "../../users/interface";

interface IinitialState {
  token: string | null;
  user: IUser | null;
  key: string;
}

const initialState: IinitialState = {
  token: getLocal("token") || null,
  user: null,
  key: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      setLocal("token", state.token);
    },
    removeToken: (state) => {
      state.token = null;
      removeLocal("token");
    },
    setKey: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
    },
    removeKey: (state) => {
      state.key = "";
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { setToken, removeToken, setKey, removeKey, setUser, removeUser } =
  authSlice.actions;

export default authSlice.reducer;
