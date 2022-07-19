import styled, { css, keyframes } from "styled-components";

const shoppingCartAnimation = keyframes`
0% {
    left: 100%;
    opacity: 0;
  } 
100% {
    left: 0;
    opacity: 1;
  }
`;

const Button = styled.button`
  position: fixed;
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
          animation: ${shoppingCartAnimation} 0.5s ease-in-out 0s 1 normal;
        `
      : css`
          display: none;
        `}

  @media ${({ theme }) => theme.device.desktop} {
    display: none;
  }
`;

export { Button, Container };
