import { UserProps } from "../../types/user";

import * as S from "./styles";

const User = ({
  login,
  name,
  avatar_url,
  followers,
  following,
  location,
  email,
  bio
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
      {email && (
        <S.PLabelLocation>
          <S.IconLocationCustom />
          <S.SpanLabelLocation>{email}</S.SpanLabelLocation>
        </S.PLabelLocation>
      )}
      <S.BoxBio>
        <S.TitleBio>⫸⫸⫸ {name} ⫷⫷⫷</S.TitleBio>
        <S.LabelBio>{bio}</S.LabelBio>
      </S.BoxBio>
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

export default User;
