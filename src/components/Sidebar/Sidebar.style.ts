import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  box-shadow: 0px 0px 15px 2px rgba(151, 151, 151, 0.73);
  border: none;
  border-radius: 50%;
  top: 1.5rem;
  right: 1.5rem;
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

const CartQuantity = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  border-radius: 50%;
  top: 4rem;
  right: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.bold};
  z-index: ${({ theme }) => theme.zIndex.top};

  @media ${({ theme }) => theme.device.desktop} {
    display: none;
  }
`;

const Container = styled.div`
  @media ${({ theme }) => theme.device.desktop} {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: scroll;
  }
`;

export { Button, CartQuantity, Container };
