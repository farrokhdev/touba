import React, { memo } from "react";
interface Props {
  title: string;
  active: boolean;
}
const ComponentRadioCircle = ({ title, active }: Props) => {
  return (
    <div className="row">
      <div className="col-1 ">
        <div className="row d-flex align-items-center">
          <div className="col-2">
            <div className="circle-radio">
              {active && <div className="circle-radio-active"></div>}
            </div>
          </div>
          <div className="col-10">
            <div className="smalText ">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentRadioCircle);
