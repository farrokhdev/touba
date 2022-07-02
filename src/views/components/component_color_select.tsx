import React, { memo, useState } from "react";

const ComponentColorSelect = () => {
    const [active,setActive]=useState(1)
  return (
    <div className=" select-color d-flex align-items-center p-2 justify-content-center">
      <div className={`px-3 ${active==1 && 'color-active ' } `}>
        <div onClick={()=>setActive(1)} className="circle-green"></div>
      </div>
      <div   className={`px-3 ${active==2 && 'color-active ' } `}>
        <div onClick={()=>setActive(2)} className="circle-orange"></div>
      </div>
    </div>
  );
};

export default memo(ComponentColorSelect);
