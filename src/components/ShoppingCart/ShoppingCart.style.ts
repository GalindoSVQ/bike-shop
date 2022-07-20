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

const Container = styled.div<{ $show: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem 0.5rem 7rem;
  gap: 2rem;

  & > h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fonts.bold};
  }

  & > span {
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fonts.medium};
    align-self: center;
  }

  @media ${({ theme }) => theme.device.mobile} {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: ${({ theme }) => theme.zIndex.middle};
    border: 1px solid red;
    overflow-y: scroll;

    ${({ $show }) =>
      $show
        ? css`
            animation: ${shoppingCartAnimation} 0.5s ease-in-out 0s 1 normal;
          `
        : css`
            display: none;
          `}
  }
`;

const Items = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 2rem;
  }
`;

export { Container, Items };
