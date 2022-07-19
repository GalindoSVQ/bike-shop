import { PropsWithChildren } from "react";
import { Container, LoaderCard } from "./CardPlaceholder.style";

type Props = {
  items?: number;
};

function CardPlaceholder({ items = 1 }: Props) {
  const keys = [...Array(items).keys()];

  const Placeholder = ({ children }: PropsWithChildren) => (
    <Container>{children}</Container>
  );

  return (
    <>
      {keys.map((key) => (
        <Placeholder key={key.toString()}>
          <LoaderCard />
        </Placeholder>
      ))}
    </>
  );
}

export { CardPlaceholder };
