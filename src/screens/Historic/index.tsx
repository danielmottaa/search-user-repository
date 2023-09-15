import { useUserSelector } from "../../store/useReduxSelector";
import UserHistoric from "../../components/UserHistoric";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as S from "./styles";

const Historic = () => {
  const [users, setUsers] = useState<any[]>([]);
  const { activeUser } = useUserSelector();
  const navigate = useNavigate();

  useEffect(() => {
    AsyncStorage.getItem("activeUser").then((item) => {
      if (activeUser.length === 0 && item) {
        setUsers(JSON.parse(item));
        console.log(item);
      } else {
        setUsers(activeUser);
      }
    });
  }, []);

  return (
    <S.Container>
      <S.LinkCustom onClick={() => navigate("/")}>Voltar</S.LinkCustom>
      {users.length <= 0 ? (
        <S.BoxWarning>
          <S.LabelValidationHistoric>
            Você não possui dados no histórico de pesquisa
          </S.LabelValidationHistoric>
        </S.BoxWarning>
      ) : (
        <>
          <S.BoxContainerContent>
            {users.map((item: any, index: any) => (
              <S.ButtonCustom key={index} onClick={() => navigate(`/${item.login}`)}>
                <UserHistoric
                  avatar_url={item.avatar_url}
                  login={item.name || item.login}
                />
              </S.ButtonCustom>
            ))}
          </S.BoxContainerContent>
        </>
      )}
    </S.Container>
  );
};

export default Historic;
