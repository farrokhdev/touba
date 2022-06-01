import React, { memo } from "react";
import PackageCard from "./card_package";

const Packaging = () => {
  return (
    <div>
      <div className="p-4">
        <div className=" row">
          <div className="specifications-tabActive col-4 text-center">
            <p>Packaging & Shipping</p>
          </div>
        </div>
        <div className="row p-4 ">
          <div className="col-2 smalText">Packaging Details :</div>
          <div className="col-9 bigText">Box</div>
        </div>
        <div className="row p-4 ">
          <div className="col-2 smalText">Ningbo</div>
          <div className="col-9 bigText">Port:</div>
        </div>
         <div className="row p-4 ">
          <div className="col-2 smalText">Lead Time:</div>
          <div className="col-9 "><PackageCard/></div>
        </div>
      </div>
    </div>
  );
};

export default memo(Packaging);
