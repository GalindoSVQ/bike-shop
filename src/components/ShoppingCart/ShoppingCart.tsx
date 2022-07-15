import { useState } from "react";
import ShoppingCartSVG from "../../assets/icons/shopping-cart.svg";
import XIcon from "../../assets/icons/x.svg";
import { Button, Container } from "./ShoppingCart.style";

function ShoppingCart() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const showShoppingCartHandler = () => {
    setShowShoppingCart((current) => !current);
  };

  const CartButton = () => (
    <Button>
      <img
        src={showShoppingCart ? XIcon : ShoppingCartSVG}
        alt={`${showShoppingCart ? "Close" : "Open"} shopping cart`}
        onClick={showShoppingCartHandler}
      />
    </Button>
  );

  return (
    <>
      <CartButton />
      <Container $show={showShoppingCart}>Shopping Cart</Container>
    </>
  );
}

export { ShoppingCart };
