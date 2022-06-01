import React, { memo } from "react";
import shape from "../../assets/icons/icon-shape.svg";
import zorat from "../../assets/images/smallZorat.png";
const ComponentShape = () => {
  return (
    <div className="shape-image">
      <img className="" src={shape} />
      <div className="content-shape">
        {" "}
        <img className="content-shape" src={zorat} />
      </div>
    </div>
  );
};

export default memo(ComponentShape);
