import React, { memo } from "react";
import logo from "../../assets/icons/icon-logo-single1.svg";

import smalllogo from "../../assets/icons/icon-small-logo.svg";


import orangeStar from "../../assets/images/orangeStar.png";
import { IconGem } from "../../assets";
import iconChin from "../../assets/icons/icon-chin.svg";
import mail from "../../assets/icons/icon-mail.svg";
import clock from "../../assets/icons/icon-clock.svg";

import iconMessage from "../../assets/icons/icon-message.svg";
import iconCard from "../../assets/icons/icon-card.svg";
import shose from "../../assets/icons/icon-shose-card.svg";
import settings from "../../assets/images/settings.png";
import icon_unit from "../../assets/icons/icon-unit.svg";
import { Divider } from "./divider";

const ComponentDetailPRoductSideCard = () => {
  return (
    <div className="p-3 product-side-card">
      <div className="row">
        <div className="col-4">
          <div className="image-shose-box">
            <img src={shose} />
          </div>
        </div>
        <div className="col-8">
          <div className="topbar-text">
            Promotional Female Cheap Shoes,Original Good Brand Shoes
          </div>
        </div>
      </div>
      <div className="unit-box mt-3">
        <div className="row mt-2 p-4 border-bottom">
          <div className={`col-6 d-flex align-items-center  `}>
            <div className="px-2">
              <img src={icon_unit} />
            </div>
            <div style={{marginLeft:"8%"}}>
              <div className="text-header">Unit:</div>
              <div className="boldText">Pair:</div>
            </div>
          </div>
          <div className="col-6 d-flex  align-items-center">
            <div className="px-2">
              <img src={settings} />
            </div>
            <div style={{marginLeft:"8%"}}>
              <div className="text-header">Min. Order</div>
              <div className="boldText">12</div>
            </div>
          </div>
        </div>
        <div className={`row p-4`}>
          <div className={`col-6 px-3 py-1  `}>
            <div className={`bold-text row`}>$639</div>
            <div className="text-header row">Min Price</div>
          </div>
          <div className={`col-6 px-3 py-1  `}>
            <div className={`bold-text  row`}>$1,099</div>
            <div className="text-header row">Min Price</div>
          </div>
        </div>
      </div>
      <div className="row mt-3 d-flex justify-content-center align-items-center">
        <div className="col-2">
          <div className="image-box">
            <img src={smalllogo} />
          </div>
        </div>
        <div className="col-8 px-3  align-items-center flex-column ">
          <div className="logo-text">Quanzhou Laren Trading Co., Ltd.</div>

          <p className="text-desc">Trading Company</p>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center ">
        <div className="row d-flex justify-content-center mt-2 ">
          <div className="product-single1-card-region">
            <div className="row ">
              <div className="col-6 d-flex align-items-center border-right">
                <div className="row px-2 d-flex align-items-center">
                  <div className="col-4">
                    <div className="">
                      <img src={iconChin} />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="text-desc">Region:</div>
                    <div className="bold-text">China</div>
                  </div>
                </div>
              </div>
              <div className="col-6 tex-center px-2">
                <div className="text-desc ">Membership:</div>
                <div className="bold-text">4YR + 7M</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="row">
          <div className="col-6 d-flex align-items-center">
            <img src={clock} />
            <div style={{ marginLeft: "3%" }}>
              <div className="text-desc">On-time delivery</div>
              <div className="bold-text">98.6%</div>
            </div>
          </div>
          <div className="col-6 d-flex align-items-center   justify-content-center ">
            <img src={mail} />
            <div style={{ marginLeft: "3%" }}>
              <div className="text-desc">Response Time</div>
              <div className="bold-text">≤15h</div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="seemore">Supplier Profile</div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-5 pl-2">
            <Divider direction={"vertical"} />
          </div>
          <div className="col-2 ">
            <div className="text-desc text-center">Contact</div>
          </div>
          <div className="col-5 pr-2">
            <Divider direction={"vertical"} />
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-center align-items-center mt-4">
        <div className="footer-text">
          For product pricing, customization, or other inquiries:
        </div>
      </div>
      <div className="d-flex  align-items-center mt-3">
        <button className="button-message w-100 d-flex justify-content-center align-items-center">
          <img style={{ marginRight: "2%" }} src={iconMessage} />
          Message Supplier
        </button>
      </div>
      <div className="d-flex  align-items-center mt-3">
        <button className="button-cart w-100 d-flex justify-content-center align-items-center">
          <img style={{ marginRight: "2%" }} src={iconCard} />
          Add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default memo(ComponentDetailPRoductSideCard);
