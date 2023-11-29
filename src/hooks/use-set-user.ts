import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setUser } from "../features/user/user-slice";

import { useAppSelector } from "./use-app-selector";

export const useSetUser = () => {
  const name = useAppSelector((state) => state.user.name);

  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>(name);

  const navigate = useNavigate();

  const handleSetUsername = (ev: React.SyntheticEvent) => {
    setUsername((ev.target as HTMLInputElement).value);
  };

  const handleConfirmUsername = () => {
    if (username) {
      if (username.length <= 15) {
        setUsername("");
        dispatch(setUser(username));
        navigate("/home");
      }
    }
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
