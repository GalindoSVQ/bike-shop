import { Pagination } from "components/Pagination";
import Bike from "models/bike";
import { API } from "utilities/constants";
import { useCounter, useFetch } from "hooks";
import { Container } from "./Home.style";

export function Home() {
  const { count: page, increment, decrement } = useCounter(1);
  const { data, loading, error } = useFetch<Bike[]>(
    `${API.BASE_URL}${API.PRODUCTS}?_page=${page}&_limit=${API.LIMIT}`
  );

  return (
    <Container>
      {loading ? (
        <p>Loading... </p>
      ) : (
        data?.map((bike) => <p key={bike.id}>{bike.title}</p>)
      )}
      {!loading && (
        <Pagination
          currentPage={page}
          totalPages={40}
          handleIncrement={increment}
          handleDecrement={decrement}
        />
      )}
    </Container>
  );
}
