import { useCounter } from "hooks/useCounter";
import { useFetch } from "hooks/useFetch";
import Bike from "models/bike";
import { API } from "utilities/constants";

export function Home() {
  const { count: page, increment, decrement } = useCounter(1);
  const { data, loading, error } = useFetch<Bike[]>(
    `${API.BASE_URL}${API.PRODUCTS}?_page=${page}&_limit=${API.LIMIT}`
  );

  return (
    <div>
      {loading ? (
        <p>Loading... </p>
      ) : (
        data?.map((bike) => <p key={bike.id}>{bike.title}</p>)
      )}
    </div>
  );
}
