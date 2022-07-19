import { Container } from "./Pagination.style";

type Props = {
  currentPage: number;
  totalPages: number;
  increment: (value?: number) => void;
  decrement: (value?: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  increment,
  decrement,
}: Props) {
  const paginationHandler = (type: "increment" | "decrement") => {
    type === "increment" ? increment() : decrement();
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Container>
      <button
        onClick={() => paginationHandler("decrement")}
        disabled={currentPage === 1}
      >
        &#60;
      </button>
      {currentPage} of {totalPages}
      <button
        onClick={() => paginationHandler("increment")}
        disabled={currentPage === totalPages}
      >
        &#62;
      </button>
    </Container>
  );
}
