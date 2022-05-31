import React, { memo } from "react";
import star from "../../assets/images/Star.png";
import orangestar from "../../assets/images/orangeStar.png";
interface width{
    progressWidth:string,
    numberRate:string
}
const QualityStar = ({progressWidth,numberRate}:width) => {
  return (
    <div>
      {" "}
      <div className="d-flex align-items-center row">
        {" "}
        <div className="col-1 text-center smalText">{numberRate}</div>
        <div className="col-1 ">
          <img src={orangestar} />
        </div>
        <div className="col-9">
          <div className="progress">
            <div
              className={`progress-bar w-${progressWidth}`}
              role="progressbar"
            ></div>
          </div>
        </div>
        <div className="col-1 text-center smalText">22</div>
      </div>
    </div>
  );
};

export default memo(QualityStar);
