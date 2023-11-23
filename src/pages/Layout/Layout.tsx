import { useAppSelector } from "../../hooks/use-app-selector";

import { Login } from "../Login";

import { Header } from "../../components/structures/Header";
import { Main } from "../../components/structures/Main";
import { FormUser } from "../../components/forms/FormUser";

export const Layout = () => {
  const name = useAppSelector((state) => state.user.name);

  return (
    <>
      {!name ? (
        <Login />
      ) : (
        <>
          <Header />
          <Main />
        </>
      )}
      <FormUser />
    </>
  );
};
