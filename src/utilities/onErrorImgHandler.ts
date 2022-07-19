import { SyntheticEvent } from "react";
import BikePlaceholder from "assets/images/placeholder_bike.svg";

export const onErrorImgHandler = (
  { currentTarget }: SyntheticEvent<HTMLImageElement, Event>,
  placeholder = BikePlaceholder
) => {
  currentTarget.onerror = null;
  currentTarget.src = placeholder;
};
