import styled from "@emotion/styled";

import { ConnectButton } from "./ConnectButton";

const Logo = styled.h1`
  font-size: 1.56em;
  font-family: ${({ theme }) => theme.fonts.logo};
  margin: 0;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.m}px;
`;

export const Header = () => (
  <StyledHeader>
    <Logo>CoinFlip - Double or Lose</Logo>
    <ConnectButton />
  </StyledHeader>
);
