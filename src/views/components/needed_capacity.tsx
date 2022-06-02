import React from "react";

export type IProps = {};

const NeededCapacity: React.FC<IProps> = () => {
  return (
    <div className="needed-Capacity d-flex flex-row align-items-center">
      <label>Capacity You Need</label>
      <div className="w-100 h-100 d-flex flex-row align-items-center input-Container">
        <input type="number" placeholder="100" />
        <span>Ton</span>
      </div>
      <div className="max d-flex align-items-center justify-content-center">
        <div className=" d-flex align-items-center justify-content-center">
          <span>Max</span>
        </div>
      </div>
    </div>
  );
};

export default NeededCapacity;
