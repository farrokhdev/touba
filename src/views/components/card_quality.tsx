import React, { memo } from "react";
import star from "../../assets/images/Star.png";
import orangestar from "../../assets/images/orangeStar.png";

import QualityStar from "./quality_star";
import mail from "../../assets/images/mail.png";
import clock from "../../assets/images/clock.png";

const CardQuality = () => {
  return (
    <div className="quality-card">
      <div className="row">
        <div className="col-2">
          <div className="smalText mt-2">Product Quality</div>
          <div className="bigText mt-2">5.0</div>
          <div className="smalText mt-2">
            <img src={orangestar} />
            <img src={orangestar} />
            <img src={orangestar} />
            <img src={orangestar} />
            <img src={orangestar} />
          </div>
          <div className="smalText mt-2">22 Reviews</div>
        </div>
        <div className="col-4">
          <QualityStar progressWidth={"100"} numberRate="5" />
          <QualityStar progressWidth={"0"} numberRate="4" />

          <QualityStar progressWidth={"0"} numberRate="3" />
          <QualityStar progressWidth={"0"} numberRate="2" />
          <QualityStar progressWidth={"0"} numberRate="1" />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-6 text-center">
              <img src={mail} />
              <div className="smalText">Response Time</div>
              <div className="bigText">≤15h</div>
            </div>
            <div className="col-6 text-center">
              <img src={clock} />
              <div className="smalText">On-time delivery</div>
              <div className="bigText">98.6%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo( CardQuality);
