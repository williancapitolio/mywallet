import { useState } from "react";

import { useDispatch } from "react-redux";

import { setUser } from "../features/user/user-slice";

import { useAppSelector } from "./use-app-selector";

export const useSetUser = () => {
  const name = useAppSelector((state) => state.user.name);

  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>(name);

  const handleSetUsername = (ev: React.SyntheticEvent) => {
    setUsername((ev.target as HTMLInputElement).value);
  };

  const handleConfirmUsername = () => {
    if (username) dispatch(setUser(username));
  };

  const checkIfPressKeyEnter = (ev: React.KeyboardEvent) => {
    ev.key === "Enter" && handleConfirmUsername();
  };

  return {
    name,
    handleSetUsername,
    handleConfirmUsername,
    checkIfPressKeyEnter,
  };
};
