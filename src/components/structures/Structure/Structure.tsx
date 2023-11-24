import { useAppSelector } from "../../../hooks/use-app-selector";

import { Home } from "../../../pages/Home";
import { Login } from "../../../pages/Login";

export const Structure = () => {
  const name = useAppSelector((state) => state.user.name);

  if (name) {
    return <Home />;
  } else {
    return <Login />;
  }
};
