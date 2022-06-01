import React, { memo } from "react";

const Specifications = () => {
  return (
    <div className="p-4">
      <div className=" row">
        <div className="specifications-tabActive col-3 text-center">
          <p>Specifications</p>
        </div>
      </div>
      <div className=" mt-3  card-specifications">
        <div className="col-3 text-small">
          <div>Product Use:</div>
        </div>
        <div className="col-3 bold-text">
          <div>Fashion</div>
        </div>
      </div>
      <div className=" mt-3  card-specifications-white">
        <div className="col-3 text-small">
          <div>Dimensions</div>
        </div>
        <div className="col-3 bold-text">
          <div>12*23*25 cm</div>
        </div>
      </div>
      <div className=" mt-3 card-specifications">
        <div className="col-3 text-small">
          <div>Weight:</div>
        </div>
        <div className="col-3 bold-text">
          <div>800 gr</div>
        </div>
      </div>
      <div className=" mt-3 card-specifications-white ">
        <div className="col-3 text-small">
          <div>Colors:</div>
        </div>
        <div className="col-3 bold-text">
          <div>Blue</div>
        </div>
      </div>
    </div>
  );
};

export default memo(Specifications);
