import styled from "styled-components";

const Container = styled.aside`
  width: 25%;
  position: sticky;
  top: 0;
  height: 100vh;

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export { Container };
