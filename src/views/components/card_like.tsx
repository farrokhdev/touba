import React, { memo } from "react";
import greenHeart from "../../assets/icons/icon-heart.svg";
import shose from "../../assets/images/00.png";
import settings from "../../assets/images/settings.png";
import { useNavigate } from "react-router-dom";
import { ImageBrandDisacount } from "../../assets/index";
import iconUnit from "../../assets/icons/icon-unit.svg";

interface Props {
  discount?: boolean;
  percent?: string;
  navigate?: string;
  icon?: any;
}
const CardLike = ({ discount, percent, navigate, icon }: Props) => {
  const navigation = useNavigate();
  return (
    <div className="card-border border-optional" onClick={() => navigation(navigate || "#")}>
      <div className="row">
        <div className="d-flex justify-content-between ">
          {icon ? (
            <div className="m-2">
            <img src={icon} />
            </div>
          ) : (
            <div className="circle ">

              <img src={greenHeart} />
            </div>
          )}

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

      <div className="row px-4 ">
        <div className="bold-text">Product Name Here </div>
      </div>
      <div className="row mt-2 px-4 py-2">
        <div className={`col-6 d-flex border-right`}>
          <div className=" py-1">
            <img src={iconUnit} />
          </div>
          <div style={{ marginLeft: "8%" }}>
            <div className="text-header">Unit:</div>
            <div className="boldText">Pair:</div>
          </div>
        </div>
        <div className="col-6 d-flex px-3">
          <div className="px-2 py-1">
            <img src={settings} />
          </div>
          <div style={{ marginLeft: "8%" }}>
            <div className="text-header">Min. Order</div>
            <div className="boldText">12</div>
          </div>
        </div>
      </div>
      <div className={`row card-like-footer py-2  px-4`}>
        <div className={`col-6  py-  border-right`}>
          <div className={`bold-text row`}>$639</div>
          <div className="text-header row">Min Price</div>
        </div>
        <div className={`col-6 px-4 py-1  `}>
          <div className={`bold-text row`}>$639</div>
          <div className="text-header row">Min Price</div>
        </div>
      </div>
    </div>
  );
};

export default memo(CardLike);
