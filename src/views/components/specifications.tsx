import React, { memo } from "react";

const Specifications = () => {
  return (
    <div className="p-4">
      <div className=" row">
        <div className="specifications-tabActive col-3 ">
          <p>Specifications</p>
        </div>
      </div>
      <div className=" mt-3  card-specifications py-2">
        <div className="col-3 smalText">
          <div>Product Use:</div>
        </div>
        <div className="col-3 bold-text">
          <div>Fashion</div>
        </div>
      </div>
      <div className=" mt-3  card-specifications-white py-2">
        <div className="col-3 smalText">
          <div>Dimensions</div>
        </div>
        <div className="col-3 bold-text">
          <div>12*23*25 cm</div>
        </div>
      </div>
      <div className=" mt-3 card-specifications py-2">
        <div className="col-3 smalText">
          <div>Weight:</div>
        </div>
        <div className="col-3 bold-text">
          <div>800 gr</div>
        </div>
      </div>
      <div className=" mt-3 card-specifications-white  py-2">
        <div className="col-3 smalText">
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
