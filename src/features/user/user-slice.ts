import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getLocalStorageData } from "../../services/get-local-storage-data";

import { User } from "../../models/User";

const USER_STORAGE = "user-storage";

const DEFAULT_INITIAL_STATE: User = {
  name: "",
  modalFormUser: false,
};

const initialState = getLocalStorageData<User>(
  USER_STORAGE,
  DEFAULT_INITIAL_STATE
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state = {
        ...state,
        name: action.payload,
        modalFormUser: false,
      };
      localStorage.setItem(USER_STORAGE, JSON.stringify(state));
      return state;
    },
    resetUser: (state) => {
      state = { ...state, name: "", modalFormUser: false };
      localStorage.removeItem(USER_STORAGE);
      return state;
    },
    toggleModal: (state) => {
      return { ...state, modalFormUser: !state.modalFormUser };
    },
  },
});

export const { setUser, resetUser, toggleModal } = userSlice.actions;
