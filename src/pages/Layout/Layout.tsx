import { useAppSelector } from "../../hooks/use-app-selector";

import { Header } from "../../components/structures/Header";
import { Main } from "../../components/structures/Main";

import { Login } from "../Login";

export const Layout = () => {
  const name = useAppSelector((state) => state.user.name);

  return (
    <>
      {name ? (
        <>
          <Header />
          <Main />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
