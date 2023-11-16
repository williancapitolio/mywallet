import { createSlice } from "@reduxjs/toolkit";

import { getLocalStorageData } from "../../services/get-local-storage-data";

import { Theme } from "../../models/Theme";

const THEME_STORAGE = "theme-storage";

const DEFAULT_INITIAL_STATE: Theme = {
  title: "dark",
};

const initialState = getLocalStorageData<Theme>(
  THEME_STORAGE,
  DEFAULT_INITIAL_STATE
);

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.title = state.title === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_STORAGE, JSON.stringify(state));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
