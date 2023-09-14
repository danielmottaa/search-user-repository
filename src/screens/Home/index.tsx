import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../store/ducks/user";
import Search from "../../components/InputSearch/Search";
import { UserProps } from "../../types/user";
import User from "../../components/User";
import Error from "../../components/Error";

import * as S from "./styles";
import Loading from "../../components/Loading";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

      const { avatar_url, login, location, followers, following } = data;

      const userData: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
      };

      setUser(userData);
    } catch (error) {
      console.log("Erro ao pesquisar usuário: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const dispatch = useDispatch();

  const teste = () => {
    dispatch(userData("testeeee"));
  };

  useEffect(() => {
    teste();
  }, []);

  return (
    <S.Container>
      <Search loadUser={loadUser} />
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
