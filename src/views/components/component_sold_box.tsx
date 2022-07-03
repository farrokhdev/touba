import React, { memo } from "react";
import { IconChartSold } from "../../assets/index";

const ComponentSoldBox = () => {
  return (
    <div className="component-sold-box">
      <div className="green-card ">
      <div className="p-3">
        <div className="text-header">Sales Growth</div>
        <div className="text-desc mt-3">Compared to last week</div>
        <div className="text-percent mt-2">+12.3%</div>
       </div>

        <div className="py-2">
          <img src={IconChartSold} />
        </div>
      </div>
      <div className="row primary-card">
        <div className="col-6 px-3 py-2">
            <div className="text-time">Last Week</div>
            <div className="text-price mt-2"> $152,423</div>

        </div>
        <div className="col-6 px-3 py-2">
            <div className="text-time">Last Week</div>
            <div className="text-price mt-2"> $152,423</div>

        </div>
      </div>
    </div>
  );
};

export default memo(ComponentSoldBox);
