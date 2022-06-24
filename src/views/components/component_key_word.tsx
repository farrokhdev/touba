import React, { memo } from "react";

const ComponentKeyWord = () => {
  return (
    <div className="component-keyword">
      <div className="">
        <div className="text-keyword">Top Keywords</div>
      </div>
      <div className="row d-flex align-items-center mt-3">
        <div className="col-5" >
          <button className="btn-keyword">Wheel Loader</button>
        </div>
        <div className="col-3 ">
          <button className="btn-keyword">Forklift</button>
        </div>
        <div className="col-3">
          <button className="btn-keyword">Excavator</button>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentKeyWord);
