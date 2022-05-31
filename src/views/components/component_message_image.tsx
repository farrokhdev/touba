import React, { memo } from "react";
import iconArrow from "../../assets/icons/icon-arrow-green.svg";
import rani from "../../assets/images/rani.png";

interface Props {
  title: string;
  desc: string;
  country: string;
  time: string;
  image: string;
}
const ComponentMesageImage = ({ title, desc, country, time, image }: Props) => {
  return (
    <div>
      <div className="message-box-imaege">
        <div className="row ">
          <div
            className="col-2"
            style={{ background: `url(${image})`, backgroundSize: "100% 100%" }}
          ></div>
          <div className="col-8 p-2">
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
