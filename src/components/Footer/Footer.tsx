import { Pagination } from "components/Pagination";
import { Container } from "./Footer.style";

export function Footer() {
  return (
    <Container>
      <p>
        Handmade 🤟
        <a href="https://gali.dev/" target="_blank" rel="noreferrer">
          Antonio Galindo |
        </a>
        <a
          href="https://github.com/GalindoSVQ/bike-shop/"
          target="_blank"
          rel="noreferrer"
        >
          | Code
        </a>
      </p>
    </Container>
  );
}
