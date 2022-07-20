import { useCallback, useRef, useState } from "react";
import { useShoppingCart } from "context";
import { formatCurrency, lockScrollbar, onErrorImgHandler } from "utilities";
import Bike from "models/bike";
import { AddButton, Container, Data, Modal } from "./BikeCard.style";

type Props = {
  id: Bike["id"];
  title: Bike["title"];
  year: Bike["year"];
  price: Bike["price"];
  image: Bike["image"];
};

function BikeCard({ id, title, year, price, image }: Props) {
  const { addToCart } = useShoppingCart();
  const [modalOpen, setModalOpen] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const priceFormatted = formatCurrency(price);

  const onClickPicHandler = useCallback(() => {
    const isPlaceholder = /placeholder_bike.svg/i.exec(imgRef.current?.src!);

    if (!isPlaceholder) {
      setModalOpen((current) => {
        lockScrollbar(!current);
        return !current;
      });
    }
  }, []);

  return (
    <>
      <Container>
        <img
          src={image}
          alt={`Pic of ${title}`}
          ref={imgRef}
          onClick={onClickPicHandler}
          onError={onErrorImgHandler}
        />
        <h1>{title}</h1>
        <Data>
          <h3>{year}</h3>
          <span>{priceFormatted}</span>
        </Data>
        <AddButton onClick={() => addToCart({ id, title, year, price, image })}>
          + Add To Cart
        </AddButton>
      </Container>
      {modalOpen && (
        <Modal onClick={onClickPicHandler}>
          <img src={image} alt="Bike Pic" />
        </Modal>
      )}
    </>
  );
}

export { BikeCard };
