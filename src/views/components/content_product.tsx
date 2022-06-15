import React, { memo } from "react";
import star from "../../assets/images/Star.png";
import orangStar from "../../assets/images/orangeStar.png";
import stroke from "../../assets/images/Stroke.png";
import PriceCart from "./card_price";
import plain from "../../assets/images/plain.png";
import ship from "../../assets/images/ship.png";
import fill from "../../assets/images/Fill.png";
import fill4 from "../../assets/icons/icon-fill.svg";
import Certificates from "./certificates";
import iconShare from "../../assets/icons/icon-share.svg";
import { Chart } from "./chart";

interface Props {
  show: boolean;
}
const TEST = [
  { name: "JAN", size: 20 },
  { name: "FEB", size: 30 },
  { name: "MAR", size: 40 },
  { name: "APR", size: 50 },
  { name: "MAY", size: 60 },
  { name: "JUN", size: 70 },
  { name: "JUL", size: 80 },
  { name: "AUG", size: 90 },
  { name: "SEP", size: 100 },
  { name: "OCT", size: 20 },
  { name: "NOV", size: 20 },
  { name: "DEC", size: 20 },
];
const ContentProduct = ({ show }: Props) => {
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
          <div className="col-3 d-flex align-itesm-center ">
            <img src={orangStar} />
            <img src={orangStar} />
            <img src={orangStar} />
            <img src={orangStar} />
            <img src={star} />
          </div>
          <div className=" col-3 border-right   ">
            <div className="textContent">(4.2 | 12,514 Ratings)</div>
          </div>
          <div className={`textContent text-center col-4 border-right`}>
            <div>988 Customer Reviews</div>
          </div>
          <div className={`col-2 justify-content-between d-flex px-3`}>
            <div>
              <img src={iconShare} />
            </div>
            <div>
              <img src={stroke} />
            </div>
          </div>
        </div>
        {show && (
          <>
            {" "}
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
              <div className="col-4 d-flex">
                <div className="ball-orange"></div>
                <div className="ball-green"></div>
              </div>
            </div>
          </>
        )}
        {!show && (
          <div className="mt-3">
            <div className="d-flex">
              <div className="smalText">
                Overall Capacity:{" "}
                <span className="boldText"> 200Tons/Monthly</span>
              </div>
            </div>
            <div className="excess-chart">
              <div className="chart" >
                {TEST.map((name, index) => (
                  <div className="chart-content" key={index}>
                    <div className="chart-content-column">
                      <div className="chart-content-column-bottom"></div>
                      <div
                        className="chart-content-column-top"
                        style={{ height: `${name.size}%` }}
                      ></div>
                    </div>
                    <h4 className="chart-content-text">{name.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="row mt-2">
          <PriceCart />
        </div>

        {show && (
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
        )}

        {show && (
          <div className="row mt-3">
            <div className="smalText d-flex align-items-center">
              Protection & Insurance:
              <span style={{ color: " #21C085", marginLeft: "5px" }}>
                {" "}
                Touba
              </span>
              <img style={{ marginLeft: "5px" }} src={fill4} />
            </div>
          </div>
        )}
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
