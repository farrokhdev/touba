import React from "react";
import { IconStar, IconStartOutline } from "../../assets";

export type IProps = {
  rate: number;
  numOfRaiting: string;
};

const Raiting: React.FC<IProps> = ({ rate, numOfRaiting }) => {
  return (
    <div className="raiting d-flex flex-row w-100 align-items-center">
      <div>
        <img src={rate >= 1 ? IconStar : IconStartOutline} alt="star" />
        <img src={rate >= 2 ? IconStar : IconStartOutline} alt="star" />
        <img src={rate >= 3 ? IconStar : IconStartOutline} alt="star" />
        <img src={rate >= 4 ? IconStar : IconStartOutline} alt="star" />
        <img src={rate >= 5 ? IconStar : IconStartOutline} alt="star" />
      </div>
      <div className="mx-3">
        <span>
          ({rate} | {numOfRaiting} Ratings)
        </span>
      </div>
    </div>
  );
};

export default Raiting;
