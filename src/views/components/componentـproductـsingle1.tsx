import React, { memo } from "react";

const ComponentProductSingle1 = () => {
  return (
    <div className="d-flex justify-content-center align-items-center row">
      <div className="row">
        <div className="product-single1-text">Trading Company</div>
      </div>
      <div className="row d-flex justify-content-center mt-2 ">
        <button className="product-single1-button "> DIAMOND</button>
      </div>
      <div className="row d-flex justify-content-center mt-2 ">
        <div className="product-single1-card-region">
          <div className="row ">
            <div className="col-6 d-flex align-items-center border-right">
              <div className="row px-2 d-flex align-items-center">
                <div className="col-4">
                  <div className="product-single1-red-circle"></div>
                </div>
                <div className="col-3">
                  <div className="smalText">Region:</div>
                  <div className="bigText">China</div>
                </div>
              </div>
            </div>
            <div className="col-6 tex-center px-2">
              <div className="smalText ">Membership:</div>
              <div className="bigText">4YR + 7M</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentProductSingle1);
