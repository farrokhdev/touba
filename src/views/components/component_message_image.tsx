import React, { memo } from "react";
import iconArrow from "../../assets/icons/icon-arrow-image.svg";
import rani from "../../assets/images/rani.png";

interface Props {
  title: string;
  desc: string;
  country: string;
  time: string;
  image: any;
}
const ComponentMesageImage = ({ title, desc, country, time, image }: Props) => {
  return (
    <div>
      <div className="message-box-imaege mt-2">
        <div className="row ">
          <div className="col-3">
            <img src={image} width="105px"/>
          </div>
          <div className="col-7">
            <div className="bigText">{title}</div>
            <div className="smalText mt-2">{desc}</div>
            <div className="smalText mt-2">{country}</div>
          </div>
          <div className="col-2 p-2 d-flex flex-column justify-content-between ">
            <img src={iconArrow} />

            <div className="time-text align-self-center ">{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentMesageImage);
