import React, { memo } from "react";
import { ButtonComponent } from "./button";
import { SelectComponent, SelectText } from "./components";
import { InputTextLabel } from "./input_text_label";

const ComponentSearchBar = () => {
  return (
    <div className="d-flex align-items center row p-4 bg-white">
      <div className="col-xl-3 col-sm-12 p-2">
        <InputTextLabel value={""} />
      </div>
      <div className="col-xl-3 col-sm-12 p-2">
        <SelectText value={""} />
      </div>
      <div className="col-xl-3 col-sm-12 p-2 justify-content-center">
        <SelectComponent type='one'  />
      </div>
      <div className="col-xl-3 col-sm-12 p-2">
        <ButtonComponent title="search"  />
      </div>
    </div>
  );
};

export default memo(ComponentSearchBar);
