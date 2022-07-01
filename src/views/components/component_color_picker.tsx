import React, { memo, useState } from "react";
import { HexColorPicker } from "react-colorful";

function ComponentColorPicker() {
  const [color, setColor] = useState("#b32aa9");

  return (
    <div className="color-picker-box">
      {/* <HexColorPicker color={color} onChange={setColor} /> */}

      <div className="header-modal border-bottom d-flex align-items-center justify-content-between p-3">
        <div className="text-header">Add Color</div>
        <div className="image-circle">
          <span>&times;</span>
        </div>
      </div>
      <div className="content-modal p-4 border-bottom">
        <HexColorPicker color={color} onChange={setColor} />

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="hex-text">Hex</div>
          <div className="hex-text">{color}</div>
        </div>
      </div>
      <div className="d-flex p-4">
        <div className=""><button className="btn-save-change btn p-3">Add Color</button></div>
        <div className="px-3"><button className="btn-cancle btn p-3">Cancle</button></div>

      </div>
    </div>
  );
}

export default memo(ComponentColorPicker);
