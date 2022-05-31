import React, { memo } from "react";
import QualityCard from "./card_quality";

 const Customers = () => {
  return (
    <div>
      {" "}
      <div className="p-4">
        <div className=" d-flex justify-content-between align-items-center">
          <div className="specifications-tabActive col-4 text-center">
            <p>Customers Review</p>
          </div>
          <div className="col-2 more">Write a review</div>
        </div>
        <div className="mt-3">
            <QualityCard/>
        </div>
      </div>
    </div>
  );
};
export default memo(Customers)