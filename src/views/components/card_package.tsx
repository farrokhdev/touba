import React, { memo } from "react";

const CardPackage = () => {
  const text='>=10000 Pairs'

  return (
    <div className="package-card">
      <div className="row">
        <div className="col-4 p-4 border-right">
          <div className="smalText">30 - 99 Pairs </div>
          <div className="boldText">15 Days</div>
        </div>
        <div className="col-4 p-4 border-right px-5">
          <div className="smalText">100 - 9999 Pairs </div>
          <div className="boldText">25 Days</div>
        </div>
        <div className="col-4 p-4  px-5">
          <div className="smalText "> {text}</div>
          <div className="boldText">To be negotiated</div>
        </div>
      </div>
    </div>
  );
};

export default memo (CardPackage);
