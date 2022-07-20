import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  width: 100%;

  @media ${({ theme }) => theme.device.desktop} {
    & > div:last-child {
      margin-left: auto;
      width: 25%;
    }
  }
`;

export { Content, Main, Wrapper };
