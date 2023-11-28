import { useAppSelector } from "../../hooks/use-app-selector";

import { Header } from "../../components/structures/Header";
import { Main } from "../../components/structures/Main";

export const Home = () => {
  const name = useAppSelector((state) => state.user.name);

  if (name) {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  } else throw new Error("Não autorizado");
};
