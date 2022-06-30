import React, { memo } from "react";
import iconEdit from '../../assets/icons/icon-edit.svg'
import iconAdd from '../../assets/icons/icon-add-circle.svg'


const ComponentColors = () => {
  return (
    <div className="component-colors">
      <div className="d-flex align-items-center">
        <div className="">
          <div className="bold-text">Colors:</div>
        </div>
        <div className="px-3" >
          <div className="circle-orange "></div>
        </div>
        <div className="" >
          <div className="circle-green ">
            <img src={iconEdit}/>
          </div>
        </div>
        <div className="px-3" >
            <img src={iconAdd}/>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentColors);
