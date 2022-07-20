import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  height: 6rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.5);
  padding: 0 0.25rem;

  & > img {
    flex: 2;
    object-fit: cover;
    border-radius: 0.25rem;
    box-shadow: 1px 1px 0px 0px rgba(92, 132, 87, 1);
    height: 5rem;
  }

  & > button {
    border: none;
    background-color: transparent;
    align-self: flex-start;
    margin-top: 0.125rem;
    font-weight: ${({ theme }) => theme.fonts.bold};
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.device.mobile} {
    gap: 1rem;
  }
`;

const Data = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  flex: 1;

  & h1 {
    font-size: ${({ theme }) => theme.fontSize.small};
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  & span {
    margin-left: auto;
    font-weight: ${({ theme }) => theme.fonts.medium};
  }
`;

export { Container, Data };
