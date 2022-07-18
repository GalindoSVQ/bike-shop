import styled from "styled-components";

const Container = styled.footer`
  padding: ${({ theme }) => theme.spacing.s05};
  font-size: 0.8rem;

  & p {
    color: ${({ theme }) => theme.colors.lightGray100};
  }

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.lightGray100};
  }
`;

export { Container };
