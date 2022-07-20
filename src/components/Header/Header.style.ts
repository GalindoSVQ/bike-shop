import styled from "styled-components";

const Container = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0.25rem 2rem 0;

  & > img {
    max-height: 4rem;
  }

  & > nav {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    & > ul {
      display: flex;
      gap: 2rem;

      list-style: none;
      padding: 0;
      margin: 0;
    }

    & li a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.fonts.medium};
      text-decoration: none;
      padding: 0.5em 1em;

      &:hover {
        background: ${({ theme }) => theme.colors.secondary};
        color: white;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export { Container };
