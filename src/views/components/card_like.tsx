import React, { memo } from "react";
import greenHeart from "../../assets/images/greenHeart.png";
import shose from "../../assets/images/00.png";
import settings from "../../assets/images/settings.png";
import { useNavigate } from "react-router-dom";
import { ImageBrandDisacount } from "../../assets/index";

interface Props {
  discount?: boolean;
  percent?: string;
}
const CardLike = ({ discount, percent }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="card-border">
      <div className="row" onClick={() => navigate("/detail-product")}>
        <div className="d-flex justify-content-between ">
          <div className="circle ">
            <img src={greenHeart} />
          </div>
          <div>
            {" "}
            {discount && (
              <div className="discount-box">
                <img src={ImageBrandDisacount} />
                <div className="discount-percent">{percent}%</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="d-flex justify-content-center">
          <img src={shose} />
        </div>
      </div>

      <div className="row p-2">
        <div className="bold-text">Product Name Here </div>
      </div>
      <div className="row mt-2 p-2">
        <div className={`col-6 .border`}>
          <div className="text-header">Unit:</div>
          <div className="boldText">Pair:</div>
        </div>
        <div className="col-6 d-flex   align-items-center">
          <div className="px-2">
            <img src={settings} />
          </div>
          <div className="">
            <div className="text-header">Min. Order</div>
            <div className="boldText">12</div>
          </div>
        </div>
      </div>
      <div className={`row card-like-footer`}>
        <div className={`col-6 px-3 py-1  border`}>
          <div className={`bold-text row`}>$639</div>
          <div className="text-header row">Min Price</div>
        </div>
        <div className={`col-6 px-3 py-1  border`}>
          <div className={`bold-text" row`}>$639</div>
          <div className="text-header row">Min Price</div>
        </div>
      </div>
    </div>
  );
};

export default memo(CardLike);
