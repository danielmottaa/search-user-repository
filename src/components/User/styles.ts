import styled from "styled-components";
import { Link } from "react-router-dom";

import { MdLocationPin } from "react-icons/md";

export const Container = styled.div`
  background-color: #2b3566;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

export const ImageCustom = styled.img`
  width: 140px;
  height: 140px;
  border: 4px solid #644aff;
  border-radius: 50%;
`;

export const H2Label = styled.h2``;

export const PLabelLocation = styled.p`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const IconLocationCustom = styled(MdLocationPin)`
  fill: #4ed8c7;
  font-size: 1.5rem;
`;

export const SpanLabelLocation = styled.span`
  color: #9da5d1;
  font-weight: bold;
`;

export const BoxContainerFollowWrapper = styled.div`
  display: flex;
`;

export const BoxFollowWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const PFollowers = styled.p``;

export const PNumberFollowRwapper = styled.p`
  background-color: #4ed8c7;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
`;
export const BoxFollowing = styled.div``;

export const PFollowing = styled.p``;

export const ButtonLinkCustom = styled(Link)`
  text-align: center;
  background-color: #644aff;
  padding: 1rem;
  border-radius: 5px;
`;
