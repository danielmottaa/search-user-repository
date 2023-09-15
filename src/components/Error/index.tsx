import * as S from './styles'

type ErrorProps = {
  labelError: string
}

const Error = ({labelError}: ErrorProps) => {
  return (
    <S.Container>
      <S.LabelError>{labelError}</S.LabelError>
    </S.Container>
  );
};

export default Error;
