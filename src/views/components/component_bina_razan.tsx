import React, { memo } from "react";
import binaRazan from "../../assets/images/binarazan.png";
import china from "../../assets/images/china.png";
import mail from "../../assets/icons/icon-mail.svg";
import clock from "../../assets/icons/icon-clock.svg";
import star from "../../assets/images/Star.png";
import orangestar from "../../assets/images/orangeStar.png";

const ComponentBinaRazan = () => {
  return (
    <div className="bina-razan">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-6 d-flex align-items-center justify-content-center">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-2">
              <div className="bina-box">
                <img src={binaRazan} alt="logo" />
              </div>
            </div>

            <div
              className="col-4 d-flex flex-column "
              style={{ marginLeft: "3%" }}
            >
              <div className="bina-text text-start ">Bina Razan</div>
              <div className="d-flex ">
                <div className="country-box d-flex align-items-center ">
                  <div>
                    <img src={china} />
                  </div>
                  <div
                    className="d-flex flex-column "
                    style={{ marginLeft: "3%" }}
                  >
                    <div className="region-text">Region:</div>
                    <div className="country-text">China</div>
                  </div>
                </div>
                <div className="align-self-center">
                  <button
                    className="product-single1-button p-1"
                    style={{ marginLeft: "8%" }}
                  >
                    DIAMOND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-3  d-flex align-items-center border-right">
              <img src={clock} />
              <div style={{ marginLeft: "3%" }}>
                <div className="country-text">On-time delivery</div>
                <div className="country-text">98.6%</div>
              </div>
            </div>
            <div className="col-3 d-flex align-items-center  border-right justify-content-center ">
              <img src={mail} />
              <div style={{ marginLeft: "3%" }}>
                <div className="country-text">Response Time</div>
                <div className="country-text">≤15h</div>
              </div>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center   ">
            <img src={orangestar} />
            <img src={orangestar} />
            <img src={orangestar} />
            <img src={orangestar} />
            <img src={star} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentBinaRazan);
