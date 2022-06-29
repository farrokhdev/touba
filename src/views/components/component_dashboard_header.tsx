import React, { memo } from "react";
import iconG from "../../assets/icons/icon-girls.svg";

function ComponentDashboardHeader() {
  return (
    <div className="dashboard-header-card">
      <div className="row d-flex pt-4">
        <div className="col-9 pb-5 mt-3">
          <div className="">
            <div className="text-title">
              Complete your profile, Get 30% offer!
            </div>
            <div className="mt-2 text-desc">
              Complete your profile, Get 30% offer!
            </div>
            <div className="mt-4">
              <button className="btn btn-dashboard">Let’s Go!</button>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex ">
          <div className="d-flex align-items-end image-div">
            <img src={iconG} height={""} width={"290px"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ComponentDashboardHeader);
