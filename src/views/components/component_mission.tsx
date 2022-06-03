import React, { memo } from "react";

interface Props {
  title: string;
  desc: string;
}
const ComponentMission = ({ title, desc }: Props) => {
  return (
    <div>
      <div className="mission-card mx-2">
        <div className="circle-mission-parrent">
          <div className="circle-mission-child"></div>
        </div>
        <div className="row mt-3">
          <div className="bigText col-4 border-bottom">{title}</div>
        </div>
        <div className="row mt-3">
          <div className="smalText ">
            <p className="text-justify">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentMission);
