import React, { memo } from "react";
import shoes from "../../assets/images/Rectangle1417.png";
import arrowLeft from "../../assets/icons/icon-arrrow-left-circle.svg";
import arrowRight from "../../assets/icons/icon-arrow-right-circle.svg";

import bag from '../../assets/icons/icon-bag.svg'


interface Props{
  image:any
}
const Slider = ({image}:Props) => {
  return (
    <div>
      <div className="row">
        <img src={image} className="image" />
      </div>
      <div className="row mt-3  d-flex align-items-center ">
        <div className="arrowCircle col-1">
          <img className="arrowLeft" src={arrowLeft} />
        </div>
        <div className="col-9 p-2">
          <div className="row">
            <div className="col-3 p-1">
              <div className="imageSlider">
                <img style={{width:'60px',height:'60px'}} src={image} />
              </div>
            </div>
            <div className="col-3 p-1">
              <div className="imageSlider">
                <img style={{width:'60px',height:'60px'}} src={image} />
              </div>
            </div>
            <div className="col-3 p-1">
              <div className="imageSlider">
                <img style={{width:'60px',height:'60px'}} src={image} />
              </div>
            </div>
            <div className="col-3 p-1">
              <div className="imageSlider">
                <img style={{width:'60px',height:'60px'}} src={image} />
              </div>
            </div>
          </div>
        </div>
        <div className="arrowCircle col-1">
          <img className="arrowLeft" src={arrowRight} />
        </div>
      </div>
    </div>
  );
};

export default memo(Slider);
