import React, { memo } from "react";

const ComponentProductDetail = () => {
  return (
    <div className="row">
      <div className="border-right-dashed col-7 product-detail-box p-4">
        <div className="header-text">Excelecnt!</div>
        <div className="desc-text mt-2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
        </div>
      </div>
      <div className="col-5 product-detail-box p-4">
        <div className="row ">
          <div className="d-flex align-items-center col-8">
            <div>
              <div className="desc-text w-100">Complete the profile</div>
            </div>
          </div>
          <div className="col-4 text-end">
            <div className="percent-amount">85%</div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="progress progress-detail">
            <div
              className={`progress-bar-detail w-50`}
              role="progressbar"
            ></div>
          </div>
        </div>
        <div className="desc-text mt-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonu
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentProductDetail);
