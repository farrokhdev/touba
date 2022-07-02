import React from "react";
import iconClose from '../../assets/icons/icon-close-green.svg'
const ComponentStorage = () => {
  return (
    <div className="component-storage">
      <button className="btn ">
        <div className="">128GB</div> <img className="px-2" src={iconClose}/>
      </button>
    </div>
  );
};

export default ComponentStorage;
