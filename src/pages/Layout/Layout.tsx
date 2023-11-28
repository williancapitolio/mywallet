/* import { Structure } from "../Structure"; */
import { Outlet } from "react-router-dom";

import { ModalForm } from "../../components/modals/ModalForm";

export const Layout = () => {
  return (
    <>
      <Outlet />
      <ModalForm />
    </>
  );
};
