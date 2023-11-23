import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getLocalStorageData } from "../../services/get-local-storage-data";

import { User } from "../../models/User";

const USER_STORAGE = "user-storage";

const DEFAULT_INITIAL_STATE: User = {
  name: "",
};

const initialState = getLocalStorageData<User>(
  USER_STORAGE,
  DEFAULT_INITIAL_STATE
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      localStorage.setItem(USER_STORAGE, JSON.stringify(state));
    },
  },
});

export const { setUser } = userSlice.actions;
