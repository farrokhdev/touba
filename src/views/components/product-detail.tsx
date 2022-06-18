import React from "react";
import { ImageTest } from "../../assets";
import Raiting from "./rating";

export type IProps = {
  name: string;
  numOfRating: string;
  rate: number;
};

const ProductDetail: React.FC<IProps> = ({ name, numOfRating, rate }) => {
  return (
    <div className="d-flex flex-row align-items-center my-3 product-Detail justify-content-between">
      <img src={ImageTest} alt="productImg" className="productImg" />
      <div className="d-flex flex-column align-items-center">
        <span className="product-Name">{name}</span>
        <Raiting rate={rate} numOfRaiting={numOfRating} />
      </div>
    </div>
  );
};

export default ProductDetail;
