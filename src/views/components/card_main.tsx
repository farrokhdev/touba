import React, { memo } from "react";
import Content  from "./content";
import Slider from "./slider";

 const CardMain = () => {
  return (
    <div>
      <div className="card-main">
        <div className='tabs row px-4'>
          <div className='tabActive col-2   text-center'>
            <p>Product</p>
          </div>
          <div className={` col-3  text-center`}>
            <p>Related Excess Capacity</p>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-5">
            <Slider />
          </div>
          <div className="col-7 p-4">
            <Content />
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default memo(CardMain)