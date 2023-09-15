import styled from "styled-components";

export const Container = styled.div``;

export const LinkCustom = styled.a`
  color: #cecece;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 5%;
`;

export const BoxContainerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 1px;
`;

export const BoxWarning = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
`;

export const LabelValidationHistoric = styled.p`
  font-size: 40px;
  font-weight: bolder;
  color: #4F4F4F
`;
