import { useEffect } from "react";
import { useUserSelector } from "../../store/useReduxSelector";
import * as S from "./styles";
import UserHistoric from "../../components/UserHistoric";

const Historic = () => {
  const { activeUser } = useUserSelector();

  useEffect(() => {
    console.log("passou", activeUser);
  }, [activeUser]);

  return (
    <S.Container>
      <S.LinkCustom href="/">Voltar</S.LinkCustom>
      {activeUser === undefined ? (
        <S.BoxWarning>
          <S.LabelValidationHistoric>
            Você não possui dados no histórico de pesquisa
          </S.LabelValidationHistoric>
        </S.BoxWarning>
      ) : (
        <S.BoxContainerContent>
          <UserHistoric
            avatar_url=""
            login=""
            location=""
            // followers={}
            // following={}
          />
        </S.BoxContainerContent>
      )}
    </S.Container>
  );
};

export default Historic;
