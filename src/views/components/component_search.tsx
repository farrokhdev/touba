import React, { memo } from "react";
import arrowDown from "../../assets/images/arrowdown.png";
import iconSearch from "../../assets/icons/icon-search.svg";
const ComponentSearch = () => {
  return (
    <div className="search-input-card">
      <div className="row">
        <div className="col-1 border-right p-2 d-flex  align-items-center justify-content-center">
          <div className="p-1">
            <img src={arrowDown} alt="arrowDown" />
          </div>
          <div className=" p-1">
            <div className="smalText">Products</div>
          </div>
        </div>
        <div className="col-11 d-flex align-items-center px-4">
          <input
            type="text"
            id="form1"
            className="search-input"
            placeholder="Search"
            aria-label="Search"
          />
          <img src={iconSearch} alt="search" />
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentSearch);
