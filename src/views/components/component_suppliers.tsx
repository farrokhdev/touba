import React, { memo } from "react";
import location from "../../assets/icons/icon-location.svg";
import solid from "../../assets/icons/icon-bag.svg";
import greenHeart from "../../assets/images/greenHeart.png";
import ladan from "../../assets/images/ladan.png";
import zorat from "../../assets/images/zorat.png";
import bizhan from "../../assets/images/bizhan.png";
import chinchin from "../../assets/images/chinchin.png";
import zarmakaron from "../../assets/images/zarmakaron.png";
import pasta from "../../assets/images/pasta.png";
import bag from '../../assets/icons/icon-bag.svg'




const ComponentSuppliers = () => {
  return (
    <div>
      <div className="supplier-box">
        <div className="row">
          <div className="col-2">
            <div className="logo-box">LOGO</div>
          </div>
          <div className="col-9">
            <div className="d-flex ">
              <div className="p-1">
                <img src={location} />
              </div>
              <div className="supplier-content">
                <div className="bigText ml-3">
                  Region:
                  <span className="smalText"> Iran ( Islamic Republic of)</span>
                </div>{" "}
              </div>
              <div></div>{" "}
            </div>
            <div className="d-flex flex-wrap   mt-2">
              <div>
                <img src={solid} />
              </div>
              <div className="supplier-content">
                <div className="bigText ml-3">
                  Region:
                  <span className="smalText"> Iran ( Islamic Republic of)</span>
                </div>{" "}
              </div>
              <div></div>{" "}
            </div>
            <div className="d-flex mt-2">
              <img src={bag} />
              <div className="supplier-content">
                <div className="bigText ml-3">
                  Field Of Activity:
                  <span className="smalText">
                    {" "}
                    Importer, Exporter, Producer, Excess capacity provider
                  </span>
                </div>{" "}
              </div>
              <div></div>{" "}
            </div>
            <div className="d-flex mt-2">
              <img src={solid} />
              <div className="supplier-content">
                <div className="bigText ml-3">
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
          <div className="col-1 text-end">
            <div className="">
              <img src={greenHeart} />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-2">
            <img src={chinchin} />
          </div>
          <div className="col-2">
            <img src={zarmakaron} />
          </div>
          <div className="col-2">
            <img src={bizhan} />
          </div>
          <div className="col-2">
            <img src={zorat} />
          </div>
          <div className="col-2">
            <img src={ladan} />
          </div>
           <div className="col-2">
            <img src={pasta} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentSuppliers);
