import React, { memo } from "react";

const ComponentTextArea = () => {
  return (
    <div className="text-area">
      <label className="title px-1">Description</label>
      <textarea
        className="w-100 input-area p-2"
        placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh"
      />{" "}
    </div>
  );
};

export default memo(ComponentTextArea);
