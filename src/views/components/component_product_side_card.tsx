import React, { memo } from "react";
import logo from "../../assets/icons/icon-logo-single1.svg";
import orangeStar from "../../assets/images/orangeStar.png";
import { IconGem } from "../../assets";
import iconChin from "../../assets/icons/icon-chin.svg";
import mail from "../../assets/icons/icon-mail.svg";
import clock from "../../assets/icons/icon-clock.svg";
import iconMessage from "../../assets/icons/icon-message.svg";
import iconCard from "../../assets/icons/icon-card.svg";
import { Divider } from "./components";

interface Props  {
  handleAddToCart?:any
}
const ComponentProductSideCard = ({handleAddToCart}:Props) => {
  return (
    <div className="p-3 product-side-card">
      <div className="d-flex justify-content-center align-items-center">
        <div className="image-box">
          <img src={logo} />
        </div>
      </div>
      <div>
        <div className="logo-text d-flex justify-content-center align-items-center">
          <div className="d-flex align-items-center">
            Quanzhou Laren Trading Co., Ltd.
            <span className="d-flex align-items-center">
              (
              <img width={"15px"} height={"15px"} src={orangeStar} /> 4.2)
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <p className="text-desc">Trading Company</p>
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <button className="card-offer-horizontal-content-item-button ">
          <img src={IconGem} alt="" />
          <p className="card-offer-horizontal-content-item-button-text">
            Diamond
          </p>
        </button>
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
                    <div className="text-country">China</div>
                  </div>
                </div>
              </div>
              <div className="col-6 tex-center px-2">
                <div className="text-desc ">Membership:</div>
                <div className="text-country mt-1">4YR + 7M</div>
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
        <button onClick={()=>handleAddToCart()} className="button-cart w-100 d-flex justify-content-center align-items-center">
          <img style={{ marginRight: "2%" }} src={iconCard} />
          Add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default memo(ComponentProductSideCard);
