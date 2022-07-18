import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding: 0.5rem 0;
  gap: 1rem;

  & button {
    border: none;
    background: none;
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fonts.bold};
  }
`;

export { Container };
