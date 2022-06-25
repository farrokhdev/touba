import React, { memo } from "react";
import { Map } from "./components";

const ComponentMapBox = () => {
  return (
    <div className="border-related ">
      <div className="row border-bottom p-2 jsutify-content-center">
        <div className="col-4 text-center border-right">
          <div className="boldText">21,214</div>
          <div className="smalText mt-2">Last Week</div>
        </div>
        <div className="col-4 text-center border-right">
          <div className="boldText">21,214</div>
          <div className="smalText mt-2">Last Week</div>
        </div>
        <div className="col-4 text-center">
          <div className="boldText">21,214</div>
          <div className="smalText mt-2">Last Week</div>
        </div>
      </div>
      <div className="mt-2">
        <Map/>
      </div>
    </div>
  );
};

export default memo(ComponentMapBox);
