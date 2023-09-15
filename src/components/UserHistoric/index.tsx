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
      {location && (
        <S.PLabelLocation>
          <S.IconLocationCustom />
          <S.SpanLabelLocation>{location}</S.SpanLabelLocation>
        </S.PLabelLocation>
      )}
      <S.BoxContainerFollowWrapper>
        <S.BoxFollowWrapper>
          <S.PFollowers>Seguindo:</S.PFollowers>
          <S.PNumberFollowRwapper>{followers}</S.PNumberFollowRwapper>
        </S.BoxFollowWrapper>
        <S.BoxFollowWrapper>
          <S.PFollowing>Seguindo:</S.PFollowing>
          <S.PNumberFollowRwapper>{following}</S.PNumberFollowRwapper>
        </S.BoxFollowWrapper>
      </S.BoxContainerFollowWrapper>
    </S.Container>
  );
};

export default UserHistoric;
