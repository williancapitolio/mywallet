import { useState } from "react";

import { DefaultInput } from "../../inputs/DefaultInput";

import * as S from "./FormUserStyles";

export const FormUser = () => {
  const [username, setUsername] = useState("");

  return (
    <S.Form onSubmit={()=>console.log(1)}>
      <S.Label htmlFor="name">Nome</S.Label>
      <DefaultInput
        type="text"
        name="name"
        id="name"
        changeFunction={(ev: React.SyntheticEvent) =>
          setUsername((ev.target as HTMLInputElement).value)
        }
        value={username}
      />
    </S.Form>
  );
};
