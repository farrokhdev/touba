import React from "react";

export type IProps = {
  price: number;
  pairs: string;
  days: string;
  selected: boolean;
};

const SingleProductPrice: React.FC<IProps> = ({
  price,
  pairs,
  days,
  selected,
}) => {
  return (
    <div
      className={`single-Product-Price d-flex flex-row align-items-center justify-content-between ${
        selected ? "single-Product-Price-Select " : ""
      }`}
    >
      <div className="d-flex flex-row align-items-center justify-content-center product-Price">
        <span>${price}</span>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-evenly Product-desc">
        <span>{pairs} Pairs</span>
        <span>{days}</span>
      </div>
    </div>
  );
};

export default SingleProductPrice;
