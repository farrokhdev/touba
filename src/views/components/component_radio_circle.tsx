import React, { memo } from "react";
interface Props {
  title: string;
  active: boolean;
}
const ComponentRadioCircle = ({ title, active }: Props) => {
  return (
    <div className=" check-box">
      <div className="circle-radio">
        {active && <div className="circle-radio-active"></div>}
      </div>
      <div className="smalText ">{title}</div>
    </div>
  );
};

export default memo(ComponentRadioCircle);
