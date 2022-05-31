import React, { memo } from "react";
import shoes from "../../assets/images/Rectangle1417.png";
import arrowLeft from "../../assets/images/arrowLeft.png";
import bag from '../../assets/icons/icon-bag.svg'


const Slider = () => {
  return (
    <div>
      <div className="row">
        <img src={shoes} className="image" />
      </div>
      <div className="row mt-3  d-flex align-items-center ">
        <div className="arrowCircle col-1">
          <img className="arrowLeft" src={arrowLeft} />
        </div>
        <div className="col-9 p-2">
          <div className="row">
            <div className="col-3 p-1">
              <div className="imageSlider">
                <img src={shoes} />
              </div>
            </div>
            <div className="col-3 p-1">
              <div className="imageSlider">
                <img src={shoes} />
              </div>
            </div>
            <div className="col-3 p-1">
              <div className="imageSlider">
                <img src={shoes} />
              </div>
            </div>
            <div className="col-3 p-1">
              <div className="imageSlider">
                <img src={shoes} />
              </div>
            </div>
          </div>
        </div>
        <div className="arrowCircle col-1">
          <img className="arrowLeft" src={arrowLeft} />
        </div>
      </div>
    </div>
  );
};

export default memo(Slider);
