import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Main = styled.div`
  flex: 1;
  max-height: 100%;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-flow: row nowrap;
  min-height: 100vh;
  width: 100%;
`;

export { Content, Main, Wrapper };
