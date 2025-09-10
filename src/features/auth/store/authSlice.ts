import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getLocal, removeLocal, setLocal } from "../../../shared/helper";

interface IinitialState {
  token: string | null;
  user: any | null;
  key: string;
}

const userLocal = getLocal("user");

const initialState: IinitialState = {
  token: localStorage.getItem("token") || null,
  user: userLocal ? userLocal : null,
  key: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", state.token);
    },
    removeToken: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
    setKey: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
    },
    removeKey: (state) => {
      state.key = "";
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      setLocal("user", JSON.stringify(state.user));
    },
    removeUser: (state) => {
      state.user = null;
      removeLocal("user");
    },
  },
});

export const { setToken, removeToken, setKey, removeKey, setUser, removeUser } =
  authSlice.actions;

export default authSlice.reducer;
