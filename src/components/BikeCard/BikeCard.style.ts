import styled from "styled-components";

const AddButton = styled.button`
  margin-top: auto;
  padding: 0.5rem 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fonts.light};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
`;

const Container = styled.article`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.25rem;
  width: 300px;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.green100};
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.08),
    0 -1px 3px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.25rem;
  padding: 0.5rem;

  & img {
    object-fit: cover;
    max-height: 8rem;
    width: 100%;
    border-radius: 0.25rem 0.25rem 0 0;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.08),
      0 -2px 4px 0 rgba(0, 0, 0, 0.2);
  }

  & h1 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fonts.medium};
    padding-top: 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & h3 {
    display: inline;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 18rem;

    & img {
      height: 10rem;
    }
  }
`;

const Data = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 0.25rem;

  & span {
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fonts.medium};
  }

  & h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.fonts.slim};
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(250, 250, 250, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.modal};

  & img {
    width: 70%;
    height: auto;
    border-radius: 0.8rem;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.75);

    @media ${({ theme }) => theme.device.mobile} {
      width: 90%;
    }
  }
`;

export { AddButton, Container, Data, Modal };
