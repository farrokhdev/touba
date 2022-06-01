import React, { memo } from "react";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

const ComponentFilterRangeSlider = () => {
  return (
    <div>
      <div className="component-filter-card">
        <div className="row">
          <div className="row">
            <div className="col-4 border-right p-3">
              <div className="bigText">Monthly Capacity Filter</div>
              <div className="mt-4">
                <Range range allowCross={false} defaultValue={[0, 20]} />
              </div>

              <div className="row mt-4">
                <div className="col-4 text-center">
                  {" "}
                  <div className="amount-card">
                    <div>100</div>
                  </div>
                </div>
                <div className="col-4 text-center">
                  {" "}
                  
                    <div className="smallText">to</div>
                 
                </div>
                <div className="col-4 text-center" >
                  {" "}
                  <div className="amount-card">
                    <div>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 border-right p-3">
              <div className="bigText">Monthly Capacity Filter</div>
              <div className="mt-4">
                <Range range allowCross={false} defaultValue={[0, 20]} />
              </div>

              <div className="row mt-4">
                <div className="col-4 text-center">
                  {" "}
                  <div className="amount-card">
                    <div>100</div>
                  </div>
                </div>
                <div className="col-4 text-center">
                  {" "}
                  
                    <div className="smallText">to</div>
                 
                </div>
                <div className="col-4 text-center" >
                  {" "}
                  <div className="amount-card">
                    <div>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 border-right p-3">
              <div className="bigText">Monthly Capacity Filter</div>
              <div className="mt-4">
                <Range range allowCross={false} defaultValue={[0, 20]} />
              </div>

              <div className="row mt-4">
                <div className="col-4 text-center">
                  {" "}
                  <div className="amount-card">
                    <div>100</div>
                  </div>
                </div>
                <div className="col-4 text-center">
                  {" "}
                  
                    <div className="smallText">to</div>
                 
                </div>
                <div className="col-4 text-center" >
                  {" "}
                  <div className="amount-card">
                    <div>100</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentFilterRangeSlider);
