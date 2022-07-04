import React, { memo, useState } from "react";
import iconEdit from "../../assets/icons/icon-edit.svg";
import iconAdd from "../../assets/icons/icon-add-circle.svg";
import { ComponentColorPicker } from "./components";

const ComponentColors = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="component-colors">
      <div className="d-flex align-items-center">
        <div className="">
          <div className="bold-text">Colors:</div>
        </div>
        <div className="px-3">
          <div className="circle-orange "></div>
        </div>
        <div className="">
          <div className="circle-green ">
            <img src={iconEdit} />
          </div>
        </div>
        <div onClick={()=>setShow(true)} className="px-3">
          <img src={iconAdd} />
        </div>
        {show && (
          <div onClick={() => setShow(false)} className="modal-company">
            <ComponentColorPicker />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(ComponentColors);
