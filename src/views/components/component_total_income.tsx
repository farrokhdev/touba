import React, { memo } from "react";
import income from "../../assets/images/Income.png";
const ComponentTotlalIncome = () => {
  return (
    <div>
      <div className="total-income-box">
        <div className="row d-flex align-items-center">
          <div className="col-2 text-cente">
            <img src={income} />
          </div>
          <div className="col-4  p-3">
            <div className="smalText">Total Income:</div>
            <div className="bigText">$ 125,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentTotlalIncome);
