import React from "react";
import { IconStar, IconStartOutline } from "../../assets";

export type IProps = {
  rate: number;
  numOfRaiting?: string;
};

const Raiting: React.FC<IProps> = ({ rate, numOfRaiting }) => {
  return (
    <div className="raiting d-flex flex-row align-items-center">
      <div className="d-flex ">
        <img src={rate >= 1 ? IconStar : IconStartOutline} alt="star" />
        <img src={rate >= 2 ? IconStar : IconStartOutline} alt="star" />
        <img src={rate >= 3 ? IconStar : IconStartOutline} alt="star" />
        <img src={rate >= 4 ? IconStar : IconStartOutline} alt="star" />
        <img src={rate >= 5 ? IconStar : IconStartOutline} alt="star" />
      </div>
      <div className="mx-3">
        <span>
          {numOfRaiting === undefined ? (
            null
          ) : (
            `${rate} | ${numOfRaiting} `
          )}
        </span>
      </div>
    </div>
  );
};

export default Raiting;
      // ({rate} | {numOfRaiting} Ratings)
