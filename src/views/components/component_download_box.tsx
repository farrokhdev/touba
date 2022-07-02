import React, { memo } from "react";
import iconDownloadWhite from "../../assets/icons/icon-download-white.svg";
import iconDownloadgreen from "../../assets/icons/icon-download-green.svg";


const ComponentDownloadBox = () => {
  return (
    <div className="download-box">
      <div className="row green-box p-4">
        <div className="download-text">Download Reports</div>
        <div className="report-text mt-3">
          Download Touba’s last year sales and marketing digest. It can help you
          to make the right decisions
        </div>
        <div className="mt-3">
          <button className="d-flex align-items-center justify-content-center btn-white w-100 p-2">
            <img src={iconDownloadgreen} />
            <span className="px-2">Touba’s annual report</span>
          </button>
        </div>
      </div>
      <div className="primary-box row p-4">
        <div className="mt-2 report-text">
          Download your annual sell/buy summary here. You can analaysis your
          products here.
        </div>{" "}

        <div className="mt-3">
            <button className="d-flex align-items-center justify-content-center btn-green w-100 p-2">
                <img src={iconDownloadWhite}/>
                <span className="px-2">Touba’s annual report</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentDownloadBox);
