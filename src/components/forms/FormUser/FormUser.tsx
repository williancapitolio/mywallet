import { useAppSelector } from "../../../hooks/use-app-selector";

export const FormUser = () => {
  const modal = useAppSelector((state) => state.user.modalFormUser);

  if (modal) {
    return (
      <section>
        <div></div>
      </section>
    );
  } else return null;
};
