import React, { memo } from "react";
import iconArrow from "../../assets/icons/icon-arrow-green.svg";

const ComponentMessage = () => {
  return (
    <div>
      <div className="message-box mt-2 ">
        <div className="row mt-2 d-flex align-items-center">
          <div className="col-10 d-flex align-items-center">
            <div className="bigText">Message Title Here Message Title Here</div>
          </div>
          <div className="col-2 d-flex align-items-center">
            <div className="smalText ">1 Hour </div>

            <img src={iconArrow} />{" "}
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4 text-center  border-right d-flex align-items-center">
            <div className="smalText">Status:</div>
            <span  className="more" style={{marginLeft:'2px'}}>Closed</span>
          </div>
          <div className="col-4 p-2 text-center  border-right d-flex align-items-center">
            <div className="smalText">Priority:</div>
            <span  className="more" style={{marginLeft:'2px'}}>Normal</span>
          </div>
          <div className="col-4 text-center  p-2  ">
            <div className="smalText">Created at: 3/1/2022 - 16:31</div>
            {/* <span  className="smalText" style={{marginLeft:'2px'}}></span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentMessage);
