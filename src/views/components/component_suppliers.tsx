import React, { memo } from "react";
import location from "../../assets/icons/icon-location.svg";
import solid from "../../assets/icons/icon-bag.svg";
import greenHeart from "../../assets/icons/icon-heart.svg";
import ladan from "../../assets/images/ladan.png";
import zorat from "../../assets/images/zorat.png";
import bizhan from "../../assets/images/bizhan.png";
import chinchin from "../../assets/images/chinchin.png";
import zarmakaron from "../../assets/images/zarmakaron.png";
import pasta from "../../assets/images/pasta.png";
import bag from "../../assets/icons/icon-bag.svg";
import iconCategory from "../../assets/icons/icon-category.svg";
import iconMain from "../../assets/icons/icon-main-market.svg";

const ComponentSuppliers = () => {
  return (
    <div>
      <div className="supplier-box">
        <div className="row">
          <div className="col-2 col-xl-2 col-sm-12">
            <div className="logo-box">LOGO</div>
          </div>
          <div className="col-9 col-xl-9 col-sm-12 px-5">
            <div className="bold-text">Supplier Name here</div>
            <div className="d-flex align-items-center mt-3" >
              <div className="align-items-center">
                <img src={location} />
              </div>
              <div className="supplier-content">
                <div className="bold-text">
                  Region:
                  <span className="smalText"> Iran ( Islamic Republic of)</span>
                </div>{" "}
              </div>
            </div>
            <div className="d-flex  align-items-center   mt-3">
              <div>
                <img src={iconCategory} />
              </div>
              <div className="supplier-content">
                <div className="bold-text">
                  Business Category:{" "}
                  <span className="smalText"> Food and Beverage </span>
                </div>{" "}
              </div>
              <div></div>{" "}
            </div>
            <div className="d-flex mt-3  align-items-center">
              <img src={bag} />
              <div className="supplier-content">
                <div className="bold-text ">
                  Field Of Activity:
                  <span className="smalText">
                    {" "}
                    Importer, Exporter, Producer, Excess capacity provider
                  </span>
                </div>{" "}
              </div>
            </div>
            <div className="d-flex  align-items-center mt-3">
              <img src={iconMain} />
              <div className="supplier-content">
                <div className="bold-text ">
                  Main Market:
                  <span className="smalText">
                    {" "}
                    Armenia, Iran ( Islamic Republic of), Iraq, Turkey, United
                    Arab Emirates
                  </span>
                </div>{" "}
              </div>
              <div></div>{" "}
            </div>
          </div>
          <div className="col-1 d-flex justify-content-center ">
            <div className="circle-image">
              <img src={greenHeart} />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-xl-2 col-sm-12">
            <img src={chinchin} />
          </div>
          <div className="col-xl-2 col-sm-12">
            <img src={zarmakaron} />
          </div>
          <div className="col-xl-2 col-sm-12">
            <img src={bizhan} />
          </div>
          <div className="col-xl-2 col-sm-12">
            <img src={zorat} />
          </div>
          <div className="col-xl-2 col-sm-12">
            <img src={ladan} />
          </div>
          <div className="col-xl-2 col-sm-12">
            <img src={pasta} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentSuppliers);