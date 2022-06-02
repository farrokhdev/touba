import React from "react";
import { IconAddCircle, IconRemoveCircle } from "../../assets";

export type IProps = {
  quantity: number;
  setQuantity: any;
};

const IncrementDecrementProduct: React.FC<IProps> = ({
  quantity,
  setQuantity,
}) => {
  const incHandler = () => {
    setQuantity(quantity + 1);
  };
  const decHandler = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };
  return (
    <div className="increment-Decrement-Product d-flex flex-row align-items-center justify-content-between ">
      <button
        className="h-100 d-flex flex-row align-items-center justify-content-center"
        onClick={decHandler}
      >
        <img src={IconRemoveCircle} className="remove-Circle" />
      </button>

      <span className="h-100 d-flex flex-row align-items-center justify-content-center">
        {quantity}
      </span>
      <button
        className="h-100 d-flex flex-row align-items-center justify-content-center"
        onClick={incHandler}
      >
        <img src={IconAddCircle} className="add-Circle" />
      </button>
    </div>
  );
};

export default IncrementDecrementProduct;
