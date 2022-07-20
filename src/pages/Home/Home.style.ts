import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: space-around;
  padding: 1rem;
  flex: 1;
`;

export { Container, Wrapper };
