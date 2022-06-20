import React, { memo } from "react";
import iconedit from "../../assets/icons/icon-edit.svg";

const ComponentProgress = () => {
  return (
    <div className="px-2">
      <div className="row component-progress ">
        <div className="d-flex align-items-center col-6">
          <div>
            <img src={iconedit} />
          </div>
          <div>
            <div className="text-header w-100">Complete the profile</div>
          </div>
        </div>
        <div className="col-6 text-end">
          <div className="percent-amount">85%</div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="progress">
          <div className={`progress-bar  bg-success w-50`} role="progressbar"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentProgress);
