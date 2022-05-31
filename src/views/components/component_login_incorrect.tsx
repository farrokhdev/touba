import React, { memo } from "react";
import { ComponentRadioSquare } from "./components";

const ComponentLoginIncorrect = () => {
  return (
    <div className="p-2">
      <div className="row incorrect-box   ">
        <div className="col-6 incorrect-boc-content">
          <div className="info-box ">!</div>
          <div className="text-center ml-2 more">
            username or password incorrect
          </div>
        </div>
      </div>
      <div className="mt-3 row d-flex  justifu-content-between">
        <div className="col-6">
          <ComponentRadioSquare active={true} title={"Remember me"} />
        </div>
        <div className="col-6 text-end">
          <div className="more">Forgot Password?</div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentLoginIncorrect);
