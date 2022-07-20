import { useShoppingCart } from "context";
import { CardCartItem } from "components/CardCartItem";
import { Container, Items } from "./ShoppingCart.style";

type Props = {
  showShoppingCart: boolean;
};

function ShoppingCart({ showShoppingCart }: Props) {
  const { cartItems, total } = useShoppingCart();

  return (
    <>
      <Container $show={showShoppingCart}>
        <h1>Cart</h1>
        <Items>
          {cartItems.map((item) => (
            <CardCartItem key={item.id} bike={item} />
          ))}
        </Items>
        <span>Total: {total} </span>
      </Container>
    </>
  );
}

export { ShoppingCart };
