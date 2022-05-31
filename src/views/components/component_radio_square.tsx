import React, { memo } from "react";
interface Props {
  title: string;
  active: boolean;
}
const ComponentRadioSquare = ({ title, active }: Props) => {
  return (
    <div className=" check-box">
      <div className="square-radio">
        {active && <div className="square-radio-active"></div>}
      </div>
      <div className="smalText ">{title}</div>
    </div>
  );
};

export default memo(ComponentRadioSquare);
