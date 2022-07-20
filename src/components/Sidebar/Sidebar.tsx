import { useState } from "react";
import { useShoppingCart } from "context/ShoppingCart";
import { ShoppingCart } from "components/ShoppingCart";
import ShoppingCartSVG from "../../assets/icons/shopping-cart.svg";
import XIcon from "../../assets/icons/x.svg";
import { Button, CartQuantity, Container } from "./Sidebar.style";

export function Sidebar() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const { cartQuantity } = useShoppingCart();
  const showShoppingCartHandler = () => {
    setShowShoppingCart((current) => !current);
  };

  const CartButton = () => (
    <>
      <Button>
        <img
          src={showShoppingCart ? XIcon : ShoppingCartSVG}
          alt={`${showShoppingCart ? "Close" : "Open"} shopping cart`}
          onClick={showShoppingCartHandler}
        />
      </Button>
      {cartQuantity && <CartQuantity>{cartQuantity}</CartQuantity>}
    </>
  );

  return (
    <>
      <CartButton />
      <Container>
        <ShoppingCart showShoppingCart={showShoppingCart} />
      </Container>
    </>
  );
}
