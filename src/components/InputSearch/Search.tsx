import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import * as S from "./styles";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
  value: string
};

const Search = ({ loadUser, value }: SearchProps) => {

  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === 'Enter') {
      loadUser(userName)
    }
  }

  return (
    <S.Container>
      <h2>Busque por um usuário</h2>
      <p>Conehça seus melhores repositórios</p>
      <S.BoxInput>
        <S.InputCustom
          type="text"
          placeholder={value}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
          // value={value}
        />
        <S.ButtonCustom onClick={() => loadUser(userName)}>
          <BsSearch />
        </S.ButtonCustom>
      </S.BoxInput>
    </S.Container>
  );
};

export default Search;
