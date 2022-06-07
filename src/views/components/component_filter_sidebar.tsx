import React, { memo } from "react";
import { ComponentRadioSquare, ComponentSearch } from "./components";
import iconSearch from "../../assets/icons/icon-search.svg";
import { ButtonComponent } from "./button";
import location from "../../assets/icons/icon-location-button.svg";
import { arrowDown, ArrowUp } from "../../assets";

interface Props {
  showButton: boolean;
}
const ComponentFilterSidebar = ({ showButton }: Props) => {
  return (
    <div className="filter-sidebar-card w-100">
      {showButton && (
        <div className="d-flex align-items-cente p-3 border-bottom">
          <div className="w-100">
            <button className="button-component w-100 d-flex align-items-center">
              <h3 className="button-component-text">
                See Excess Capacity map
                <img src={location} />
              </h3>
            </button>
          </div>
        </div>
      )}
      <div className="border-bottom p-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="text text-start">Filter by Category </div>
          <div>
            <img src={ArrowUp} />
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
            <img src={ArrowUp} />
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
