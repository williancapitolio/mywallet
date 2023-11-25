import { useManageModal } from "../../../hooks/use-manage-modal";
import { useSetUser } from "../../../hooks/use-set-user";

import { DefaultInput } from "../../inputs/DefaultInput";
import { Default } from "../../buttons/Default";

import { BsXLg } from "react-icons/bs";

import * as S from "./ModalFormStyles";

export const ModalForm = () => {
  const { modal, handleCloseModal, checkIfClickOutOfModal } = useManageModal();
  const {
    name,
    handleSetUsername,
    handleConfirmUsername,
    checkIfPressKeyEnter,
  } = useSetUser();

  if (modal) {
    return (
      <S.Wrapper id="wrapperOutOfModal" onClick={checkIfClickOutOfModal}>
        <S.Container>
          <S.Header>
            <S.IconClose onClick={handleCloseModal}>
              <BsXLg />
            </S.IconClose>
          </S.Header>
          <S.Body>
            <S.TitleModal>
              {name ? "Atualizar" : "Iniciar myWallet"}
            </S.TitleModal>
            <S.Label htmlFor="name" onKeyUp={checkIfPressKeyEnter}>
              Nome
              <DefaultInput
                type="text"
                name="name"
                id="name"
                changeFunction={handleSetUsername}
                defaultValue={name}
              />
            </S.Label>
          </S.Body>
          <S.Footer>
            <Default
              type={(props) => props.theme.colors.background.primary}
              btnAction={handleCloseModal}
              text="Cancelar"
            />
            <Default
              type={(props) => props.theme.colors.button.ok}
              btnAction={handleConfirmUsername}
              text="Confirmar"
            />
          </S.Footer>
        </S.Container>
      </S.Wrapper>
    );
  } else return null;
};
