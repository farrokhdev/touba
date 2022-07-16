import { Chart } from "./../../../components/chart";
import { Component, MouseEvent } from "react";
import { IconArrowGreen, ImageProfileSupplier, IconMessages, ImagecompanyProfileTeam, ImageCertificate, IconLocation, IconTimeCircle, IconCalling, ImageComppanyProfile, ImageBinarazan, ImageChina, ImageDiamond, IconOntime, IconEmail1, IconStar, IconStartOutline, IconShare, IconHeartDashboard, IconSearchReverse, ImageTest } from "../../../../assets";
import { CardOfferHorizontal } from "../../../components/cars_offer_horizontal";
import { ComponentFilterSidebar, ComponentFilterRangeSlider, ComponentCapicityFilter } from "../../../components/components";
import ToubaProduct from "../product";
import CompanyProfileController from "../../../controllers/company_profile_controller";
import About from "./about";
import Product from "./product";
import ContactUs from "./contact_us";
import Excess from "./excess";

export default class CompanyProfile extends CompanyProfileController {

  render() {
    const {
      isShow,
    } = this.state;

    const contentRender = () => {
      if (isShow === 1) {
        return <About />;
      } else if (isShow === 2) {
        return <Product />;
      } else if (isShow === 4) {
        return <ContactUs />;
      } else if (isShow === 3) {
        return <Excess />;
      } else {
        return <About />;
      }
    };
    return (
      <div
        className={`company-Profile-Page ${isShow === 1
          ? "marginButton"
          : isShow === 2
            ? "marginButtonLow"
            : isShow === 3
              ? "excess-section"
              : "marginButtomCon"
          }`}
      >
        <div className="background-Img">
          <img src={ImageComppanyProfile} alt="background" />
        </div>
        <div className="content">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={ImageBinarazan} alt="prfileImg" className="prfileImg" />
              <div className="px-3">
                <span className="company-Name">Bina Razan</span>
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-row align-items-center region-Container px-2">
                    <img src={ImageChina} alt="region" />
                    <div className="d-flex flex-column align-items-center region mx-3">
                      <span>Region:</span>
                      <span> China</span>
                    </div>
                  </div>
                  <img
                    src={ImageDiamond}
                    alt="diamond"
                    className="diamond mx-2"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div className="d-flex flex-row align-items-center">
                <img src={IconOntime} alt="ontime" />
                <div className="d-flex flex-column align-items-start company-Benefit mx-2">
                  <span>On-time delivery </span>
                  <span>98.6%</span>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <img src={IconEmail1} alt="email" />
                <div className="d-flex flex-column align-items-start company-Benefit mx-2">
                  <span>Response Time</span>
                  <span>≤15h</span>
                </div>
              </div>
              <div className="rate">
                <img src={IconStar} alt="star" />
                <img src={IconStar} alt="star" />
                <img src={IconStar} alt="star" />
                <img src={IconStar} alt="star" />
                <img src={IconStartOutline} alt="star" />
              </div>
            </div>
          </div>
          <div className="w-100 d-flex flex-row align-items-center justify-content-between company-Nav">
            <div>
              <button
                onClick={() => this.setState({ isShow: 1 })}
                className={isShow === 1 ? "active-btn" : ""}
              >
                About
              </button>
              <button
                onClick={() => this.setState({ isShow: 2 })}
                className={isShow === 2 ? "active-btn" : ""}
              >
                Products
              </button>
              <button
                onClick={() => this.setState({ isShow: 3 })}
                className={isShow === 3 ? "active-btn" : ""}
              >
                Excess Capacity
              </button>
              <button
                onClick={() => this.setState({ isShow: 4 })}
                className={isShow === 4 ? "active-btn" : ""}
              >
                Contact Us
              </button>
            </div>
            <div className="d-flex flex-row align-items-center input-Container">
              <img src={IconShare} alt="share" className="mx-2" />
              <img src={IconHeartDashboard} alt="heart" className="mx-2" />
              <div className="input mx-3 d-flex flex-row align-items-center">
                <img src={IconSearchReverse} />
                <input placeholder="Search in this company " />
              </div>
            </div>
          </div>
          <>{contentRender()}</>
        </div>
      </div>
    );
  }
}
