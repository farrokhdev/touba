import React from "react";

export type IProps = {
  list: any[];
};

const PriceSummary: React.FC<IProps> = ({ list }) => {
  let quantity = 0;
  list.forEach((item) => (quantity = quantity + item.quantity));
  let totalPrice = 0;
  list.forEach((item) => (totalPrice = totalPrice + item.price));

  return (
    <div className="price-Summary d-flex flex-column align-items-center justify-content-around">
      <div className="product-Price d-flex flex-column align-items-center ">
        <div className="total-Quantity d-flex flex-row align-items-center justify-content-between">
          <div>
            <span className="title">Total Quantity</span>
            <span className="items mx-1">({list.length} Items)</span>
          </div>
          <span className="quantity">{quantity}</span>
        </div>
        <div className="subtotal d-flex flex-row align-items-center justify-content-between">
          <div>
            <span className="title">Subtotal</span>
            <span className="items mx-1">({list.length} Items)</span>
          </div>
          <span className="price">{totalPrice}</span>
        </div>
      </div>
      <div className="btn-Container d-flex flex-column align-items-center justify-content-end">
        <button>proceed to checkout</button>
      </div>
    </div>
  );
};

export default PriceSummary;
