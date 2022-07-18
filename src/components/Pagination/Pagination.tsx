import { Container } from "./Pagination.style";

type Props = {
  currentPage: number;
  totalPages: number;
  handleIncrement: (value?: number) => void;
  handleDecrement: (value?: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  handleIncrement,
  handleDecrement,
}: Props) {
  return (
    <Container>
      <button onClick={() => handleDecrement()} disabled={currentPage === 1}>
        &#60;
      </button>
      {currentPage} of {totalPages}
      <button
        onClick={() => handleIncrement()}
        disabled={currentPage === totalPages}
      >
        &#62;
      </button>
    </Container>
  );
}
