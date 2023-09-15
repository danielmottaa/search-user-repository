import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userData } from "../../store/ducks/user";
import Search from "../../components/InputSearch/Search";
import { UserProps } from "../../types/user";
import User from "../../components/User";
import Error from "../../components/Error";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./styles";
import Loading from "../../components/Loading";
import { useUserSelector } from "../../store/useReduxSelector";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [historicData, setHistoricData] = useState<any>([]);
  const [loginHistoric, setLoginHistoric] = useState<any>("Digite um nome de usuário");
  const dispatch = useDispatch();
  const { activeUser } = useUserSelector();
  const navigate = useNavigate();
  const { login } = useParams();

  const loadUser = async (userName: string) => {
    try {
      setIsLoading(true);
      setError(false);
      setUser(null);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();

      if (response.status === 404) {
        setError(true);
        return;
      }

      const {
        avatar_url,
        login,
        location,
        followers,
        following,
        email,
        bio,
        name,
      } = data;

      const userDataResponse: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
        email,
        bio,
        name,
      };

      setUser(userDataResponse);
      console.log(user);
      pushHistoricData(userDataResponse);
    } catch (error) {
      console.log("Erro ao pesquisar usuário: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const pushHistoricData = (user: any) => {
    if (user !== null) {
      let newData = [...historicData];
      if (!newData.find((data) => data.login === user.login)) {
        newData.unshift(user);
        setHistoricData(newData);
      }
    }
  };

  useEffect(() => {
    if (user !== null && historicData !== null) {
      dispatch(userData(historicData));
      AsyncStorage.setItem("activeUser", JSON.stringify(historicData));
    }
  }, [historicData]);

  useEffect(() => {
    AsyncStorage.getItem("activeUser").then((item) => {
      if (activeUser.length === 0 && item) {
        setHistoricData(JSON.parse(item));
        console.log(item);
      } else {
        setHistoricData(activeUser);
      }
    });
  }, []);

  useEffect(() => {
    if (login) {
      setLoginHistoric(login);
      loadUser(login)
    }
  }, [login]);

  return (
    <S.Container>
      <S.LinkCustom onClick={() => navigate("/Historic")}>
        Histórico de pesquisa
      </S.LinkCustom>
      <Search loadUser={loadUser} value={loginHistoric} />
      {isLoading && (
        <Loading type={"balls"} color={"#fff"} height="10%" width="10%" />
      )}
      {!isLoading && (
        <>
          {user && <User {...user} />}
          {error && <Error labelError="Usuário não encontrado!" />}
        </>
      )}
    </S.Container>
  );
};

export default Home;
