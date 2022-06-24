import React from "react";
import iconG from "../../assets/icons/icon-girls.svg";

function ComponentDashboardHeader() {
  return (
    <div className="dashboard-header-card">
      <div className="row d-flexs">
        <div className="col-8 p-3">
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
        <div className="col-4  ">
          <img src={iconG} />
        </div>
      </div>
    </div>
  );
}

export default ComponentDashboardHeader;
