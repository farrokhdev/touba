import React, { memo } from "react";

const CardPrice = () => {
  return (
    <div className="priceCart">
      <div className="row d-flex align-items-center w-100 ">
        <div className="border-price  col-4 p-2">
          <div className="smalText">30 - 99 Pairs</div>
          <div className="bigText">$5.00</div>
          <div className="smalText">15 Days</div>
        </div>
        <div className="border-price  col-4 p-2">
          <div className="smalText">30 - 99 Pairs</div>
          <div className="bigText">$5.00</div>
          <div className="smalText">15 Days</div>
        </div>
        <div className="p-2 col-4">
          <div className="smalText">30 - 99 Pairs</div>
          <div className="bigText">$5.00</div>
          <div className="smalText">15 Days</div>
        </div>
      </div>
    </div>
  );
};

export default memo(CardPrice);
