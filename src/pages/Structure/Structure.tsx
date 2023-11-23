import { useAppSelector } from "../../hooks/use-app-selector";

import { Home } from "../Home";
import { Login } from "../Login";

export const Structure = () => {
  const name = useAppSelector((state) => state.user.name);

  if (name) {
    return <Home />;
  } else {
    return <Login />;
  }
};
