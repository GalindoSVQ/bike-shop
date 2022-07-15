import styled, { css, keyframes } from "styled-components";
import { BREAKPOINT_MOBILE } from "styles/theme";

const shoppingCartAnimation = keyframes`
0% {
    opacity: 0;
    transform: translateX(${BREAKPOINT_MOBILE});
  } 
100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const Button = styled.button`
  position: absolute;
  box-shadow: 0px 0px 15px 2px rgba(151, 151, 151, 0.73);
  border: none;
  border-radius: 50%;
  top: 2%;
  right: 5%;
  height: 4rem;
  width: 4rem;
  z-index: ${({ theme }) => theme.zIndex.top};

  & img {
    height: 2.5rem;
    width: 2.5rem;
  }

  @media ${({ theme }) => theme.device.desktop} {
    display: none;
  }
`;

const Container = styled.div<{ $show: boolean }>`
  position: absolute;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.middle};

  ${({ $show }) =>
    $show
      ? css`
          animation-name: ${shoppingCartAnimation};
          animation-duration: 0.7s;
        `
      : css`
          display: none;
        `}

  @media ${({ theme }) => theme.device.desktop} {
    display: none;
  }
`;

export { Button, Container };
