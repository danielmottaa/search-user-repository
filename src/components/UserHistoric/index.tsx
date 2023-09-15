import { UserProps } from "../../types/user";

import * as S from "./styles";

const UserHistoric = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <S.Container>
      <S.ImageCustom src={avatar_url} alt={"logoUser"} />
      <S.H2Label>{login}</S.H2Label>
    </S.Container>
  );
};

export default UserHistoric;
