import { useAppSelector } from "../../../hooks/use-app-selector";

import { Home } from "../../../pages/Home";
import { Start } from "../../../pages/Start";

export const Structure = () => {
  const name = useAppSelector((state) => state.user.name);

  if (name) {
    return <Home />;
  } else {
    return <Start />;
  }
};
