import React, { memo } from "react";
import iconRemove from "../../assets/icons/icon-remove.svg";

const ComponentCapicityFilter = () => {
  return (
    <div className="capicity-filter row">
      <div className="col-2 px-4 py-2 d-flex item   align-items-center">
        <div className=" ">Monthly Capacity</div>
        <img src={iconRemove} />
      </div>
      <div className="col-2  left px-4 py-2 d-flex item   align-items-center">
        <div className=" d-flex ">Price</div>
        <img src={iconRemove} />
      </div>
      <div className="col-2 left px-4  py-2 d-flex item   align-items-center">
        <div className=" ">Min Order</div>
        <img src={iconRemove} />
      </div>
      <div className="col-2 left  px-4 py-2 d-flex item   align-items-center">
        <div className="  ">Item Name</div>
        <img src={iconRemove} />
      </div>
      <div className="col-2  left px-4 py-2 d-flex item   align-items-center">
        <div className="  ">Item Name</div>
        <img src={iconRemove} />
      </div>

      <div className="col-2 left align-items-center d-flex">
        <div className="seemore">Clear All filters</div>
      </div>
    </div>
  );
};

export default memo(ComponentCapicityFilter);
