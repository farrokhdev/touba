import React from "react";
import {
  IconEmailBlack,
  IconHeart,
  IconLogoSingle,
  IconOntimeBlack,
  IconStar,
  ImageChina,
  ImageDiamond,
  ImageLadan,
} from "../../assets";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export type IProps = {};

const ItemProfile: React.FC<IProps> = () => {
  return (
    <div className="item-Profile">
      <div className="like-Btn d-flex align-items-center justify-content-center">
        <img src={IconHeart} alt="like" />
      </div>
      <div className="item d-flex flex-column align-items-center">
        <div className="item-Logo">
          <img src={IconLogoSingle} alt="logo" />
        </div>
        <span className="item-Title mt-4">
          Quanzhou Laren Trading Co., Ltd.(
          <img src={IconStar} alt="star" />
          4.2)
        </span>
        <span className="item-Company my-1">Trading Company</span>
        <img
          src={ImageDiamond}
          alt="diamond"
          className="item-Diamond mt-1 mb-2"
        />
        <div className="w-100 company-Nationality d-flex flex-row align-items-center justify-content-between my-2">
          <div className="comapny-Country d-flex flex-row align-items-center ">
            <img src={ImageChina} alt="country" />
            <div className="d-flex flex-column align-items-start ms-3">
              <span>Region: </span>
              <span>China</span>
            </div>
          </div>
          <div className="company-Membership d-flex flex-column align-items-start ms-3">
            <span>Membership: </span>
            <span>4YR + 7M</span>
          </div>
        </div>
        <div className="company-Detail w-100 d-flex flex-row align-items-center justify-content-between my-3">
          <div className="response  d-flex flex-row ">
            <img src={IconEmailBlack} alt="email" />
            <div className="d-flex flex-column align-items-start mx-3">
              <span>Response Time </span>
              <span>≤15h</span>
            </div>
          </div>
          <div className="onTime  d-flex flex-row">
            <img src={IconOntimeBlack} alt="contry" />
            <div className="d-flex flex-column align-items-start ms-3">
              <span>On-time delivery </span>
              <span>98.6%</span>
            </div>
          </div>
        </div>
        <Swiper className="slider" slidesPerView={4.5}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
            <SwiperSlide>
              <img src={ImageLadan} alt="product" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ItemProfile;
