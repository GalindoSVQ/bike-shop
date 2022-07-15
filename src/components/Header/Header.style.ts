import styled from "styled-components";

const Container = styled.header`
  height: 4rem;

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export { Container };
