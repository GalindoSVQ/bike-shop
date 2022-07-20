import { Container } from "./Header.style";
import BikeRoute from "assets/images/bike_route.svg";

export function Header() {
  return (
    <Container>
      <img src={BikeRoute} alt="Cycle route poster as logo" />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
