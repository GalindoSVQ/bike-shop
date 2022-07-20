import { Pagination } from "components/Pagination";
import Bike from "models/bike";
import { API } from "utilities/constants";
import { useCounter, useFetch } from "hooks";
import { Container, Wrapper } from "./Home.style";
import { BikeCard } from "components/BikeCard";
import { CardPlaceholder } from "components/CardPlaceholder";

export function Home() {
  const { count: page, increment, decrement } = useCounter(1);
  const {
    data: bikes,
    loading,
    error,
  } = useFetch<Bike[]>(
    `${API.BASE_URL}${API.PRODUCTS}?_page=${page}&_limit=${API.LIMIT}`
  );

  return (
    <Container>
      <Wrapper>
        {loading ? (
          <CardPlaceholder items={API.LIMIT} />
        ) : (
          bikes?.map((bike) => <BikeCard key={bike.id} {...bike} />)
        )}
      </Wrapper>
      {!loading && !!bikes?.length && (
        <Pagination
          currentPage={page}
          totalPages={17}
          increment={increment}
          decrement={decrement}
        />
      )}
    </Container>
  );
}
