import React, { memo } from "react";
import shoes from "../../assets/images/Rectangle1417.png";
import arrowLeft from "../../assets/icons/icon-arrrow-left-circle.svg";
import arrowRight from "../../assets/icons/icon-arrow-right-circle.svg";
import iconCircleRight from '../../assets/icons/icon-circle-slider-right.svg'
import iconCircleLeft from '../../assets/icons/icon-circle-slider-left.svg'

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
        <div className=" col-1 text-center">
          <img className="arrowLeft" src={iconCircleLeft} />
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
        <div className=" col-1 text-center 	">
          <img className="arrowLeft" src={iconCircleRight} />
        </div>
      </div>
    </div>
  );
};

export default memo(Slider);
