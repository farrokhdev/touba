import React, { memo } from "react";
import { ComponentRadioSquare, ComponentSearch } from "./components";
import arrowUp from "../../assets/icons/icon-arrow-up.svg";
import iconSearch from "../../assets/icons/icon-search.svg";
import arrowDown from "../../assets/icons/icon-arrow-down.svg";


const ComponentFilterSidebar = () => {
  return (
    <div className="filter-sidebar-card ">
      <div className="border-bottom p-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="text text-start">Filter by Category </div>
          <div>
            <img src={arrowUp} />
          </div>
        </div>
        <div className="row p-2 mt-2">
          <div className="search-box d-flex p-2">
            <img src={iconSearch} alt="search" />

            <input
              type="text"
              id="form1"
              className="search-input"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="checkbox p-2">
            <div>
              <ComponentRadioSquare title="item name here" active={true} />
            </div>
            <div className="mt-2">
              <ComponentRadioSquare title="item name here" active={false} />
            </div>
            <div className="mt-2">
              <ComponentRadioSquare title="item name here" active={false} />
            </div>
            <div className="mt-2">
              <ComponentRadioSquare title="item name here" active={false} />
            </div>
          </div>
          <div className="opacity"></div>
          <div className="text-center mt-2 more">See more</div>
        </div>
      </div>
      <div className="border-bottom p-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="text text-start">Filter by Business Type </div>
          <div>
            <img src={arrowUp} />
          </div>
        </div>
        <div className="row p-2 mt-2">
          <div className="search-box d-flex p-2">
            <img src={iconSearch} alt="search" />

            <input
              type="text"
              id="form1"
              className="search-input"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="checkbox p-2">
            <div>
              <ComponentRadioSquare title="item name here" active={true} />
            </div>
            <div className="mt-2">
              <ComponentRadioSquare title="item name here" active={false} />
            </div>
            <div className="mt-2">
              <ComponentRadioSquare title="item name here" active={false} />
            </div>
            <div className="mt-2">
              <ComponentRadioSquare title="item name here" active={false} />
            </div>
          </div>
          <div className="opacity"></div>
          <div className="text-center mt-2 more">See more</div>
        </div>
      </div>
      <div className="border-bottom p-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="text text-start">Filter by Business Type</div>
          <div>
            <img src={arrowDown} />
          </div>
        </div>
      </div>
      <div className="border-bottom p-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="text text-start">Filter by Certificate</div>
          <div>
            <img src={arrowDown} />
          </div>
        </div>
      </div>
      <div className="border-bottom p-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="text text-start">Region</div>
          <div>
            <img src={arrowDown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentFilterSidebar);
