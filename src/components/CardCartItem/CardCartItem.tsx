import { useShoppingCart } from "context/ShoppingCart";
import Bike from "models/bike";
import { formatCurrency, onErrorImgHandler } from "utilities";
import { Container, Data } from "./CardCartItem.style";
import XIcon from "../../assets/icons/x.svg";

type Props = {
  bike: Bike;
};

function CardCartItem({ bike }: Props) {
  const { id, image: imageUrl, title, price } = bike;
  const priceFormatted = formatCurrency(price);
  const { removeFromCart } = useShoppingCart();

  return (
    <Container>
      <img
        src={imageUrl}
        alt="Close shopping cart"
        onError={onErrorImgHandler}
      />
      <Data>
        <h1>{title}</h1>
        <span>{priceFormatted}</span>
      </Data>
      <button onClick={() => removeFromCart(id)}>
        <img src={XIcon} alt="Remove item from cart" />
      </button>
    </Container>
  );
}

export { CardCartItem };
