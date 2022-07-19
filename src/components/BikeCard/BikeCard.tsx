import Bike from "models/bike";
import { useCallback, useRef, useState } from "react";
import { formatCurrency, lockScrollbar, onErrorImgHandler } from "utilities";
import { AddButton, Container, Data, Modal } from "./BikeCard.style";

type Props = {
  bike: Bike;
};

function BikeCard({ bike }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const priceFormatted = formatCurrency(bike.price);

  const onClickPicHandler = useCallback((bike: Bike | null) => {
    const isPlaceholder = /placeholder_bike.svg/i.exec(imgRef.current?.src!);

    if (!isPlaceholder) {
      setSelectedBike(bike);
      setModalOpen((current) => !current);
      lockScrollbar(!!bike);
    }
  }, []);

  return (
    <>
      <Container>
        <img
          src={bike.image}
          alt={`Pic of ${bike.title}`}
          ref={imgRef}
          onClick={() => onClickPicHandler(bike)}
          onError={(event) => onErrorImgHandler(event)}
        />
        <h1>{bike.title}</h1>
        <Data>
          <h3>{bike.year}</h3>
          <span>{priceFormatted}</span>
        </Data>
        <AddButton>+ Add To Cart</AddButton>
      </Container>
      {modalOpen && (
        <Modal onClick={() => onClickPicHandler(null)}>
          <img src={selectedBike?.image} alt="Bike Pic" />
        </Modal>
      )}
    </>
  );
}

export { BikeCard };
