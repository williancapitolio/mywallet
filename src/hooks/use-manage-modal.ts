import { useDispatch } from "react-redux";

import { toggleModal } from "../features/user/user-slice";

import { useAppSelector } from "./use-app-selector";

export const useManageModal = () => {
  const modal = useAppSelector((state) => state.user.modalFormUser);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(toggleModal());
  };

  const checkIfClickOutOfModal = (ev: React.BaseSyntheticEvent) => {
    ev.target.id === "wrapperOutOfModal" && handleCloseModal();
  };

  return { modal, handleCloseModal, checkIfClickOutOfModal };
};
