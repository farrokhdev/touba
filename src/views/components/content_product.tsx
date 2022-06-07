import React, { memo } from "react";
import star from "../../assets/images/Star.png";
import orangStar from "../../assets/images/orangeStar.png";
import stroke from "../../assets/images/Stroke.png";
import PriceCart from "./card_price";
import plain from "../../assets/images/plain.png";
import ship from "../../assets/images/ship.png";
import fill from "../../assets/images/Fill.png";
import fill4 from "../../assets/images/Fill4.png";
import Certificates from "./certificates";
import iconShare from "../../assets/icons/icon-share.svg";

const ContentProduct = () => {
  return (
    <div className="">
      <div className="header">
        <div className="headerText">Company Name / Shoes / Female</div>
        <div className="headerLogo">Standard name </div>
      </div>
      <div>
        <div className="rowDetail">
          Promotional Female Cheap Shoes,Original Good Brand Shoes
        </div>
      </div>
      <div>
        <div className={`rowRation row mt-3 p-2 `}>
          <div className="col-3">
            <img src={orangStar} />
            <img src={orangStar} />
            <img src={orangStar} />
            <img src={orangStar} />
            <img src={star} />
          </div>
          <div className=" col-3 border-right  ">
            <div className="textContent">(4.2 | 12,514 Ratings)</div>
          </div>
          <div className={`textContent text-center col-4 border-right`}>
            <div>988 Customer Reviews</div>
          </div>
          <div className={`col-2 text-center `}>
            <img src={iconShare} />
            <img src={stroke} />
          </div>
        </div>
        <div className="center row mt-2">
          <div className="col-2">
            <div className="smalText">Feature 1: </div>
          </div>
          <div className="col-3">
            <div className="">
              <button
                className="dropdown dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                128GB
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  128GB
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="center row mt-2">
          <div className="col-2">
            <div className="smalText">Colors:</div>
          </div>
          <div className="col-4">
            <div className="ball"></div>
          </div>
        </div>
        <div className="row mt-2">
          <PriceCart />
        </div>
        <div className="row mt-2 d-flex align-items-center">
          <div className="col-2">
            <div className="smalText">Shipping:</div>
          </div>
          <div className="col-1 w-60">
            <img src={plain} />
          </div>
          <div className="col-3">
            <div className="smalText">Support Express</div>
          </div>
          <div className="col-1">
            <img src={ship} />
          </div>
          <div className="col-3">
            <div className="smalText">Sea freight</div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="smalText d-flex align-items-center">
            Protection & Insurance:
            <span style={{ color: " #21C085", marginLeft: "5px" }}> Touba</span>
            <span className="d-flex align-items-center ">
              <img src={fill} />
            </span>
            <span className="fill4">
              {" "}
              <img src={fill4} />
            </span>
          </div>
        </div>
        <div className="row mt-3">
          <Certificates />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <div className="more">More Detail</div>
          <div className="smalText">SKU: 100105</div>
        </div>
      </div>
    </div>
  );
};

export default memo(ContentProduct);
