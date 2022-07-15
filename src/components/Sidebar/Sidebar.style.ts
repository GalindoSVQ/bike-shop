import styled from "styled-components";

const Container = styled.aside`
  width: 25%;

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export { Container };
