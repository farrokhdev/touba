import { memo } from "react";
import { Divider } from "./divider";

const ComponentFieldsetPrice = () => {
  return (
    <div>
      <div className="row component-fildest-box p-2 ">
        <div className="col-4 border-right p-2">
          <div className="d-flex"><div className="border-text px-1">Amount Range</div></div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className="text-content">30 - 99</div>
            <div  className="text-content">Pairs</div>

          </div>

        </div>
        <div className="col-4 border-right p-2">
        <div className="d-flex"><div className="border-text px-1">Price:</div></div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className="text-content">5</div>
            <div className="text-content">USD</div>

          </div>
        </div>
        <div className="col-4  p-2">
        <div className="d-flex"><div className="border-text px-1">Estimated Delivery Time:</div></div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className="text-content">15</div>
            <div className="text-content">Days</div>

          </div>
        </div>      </div>
    </div>
  );
};

export default memo(ComponentFieldsetPrice);
