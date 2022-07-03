import React, { Component } from "react";
import { BannerCongratulations } from "../../components/baner_congratulations";
import { CardLike, ComponentSortandSearch } from "../../components/components";
import DashboardNav from "../../components/dashboard_nav";
import DashboardCompanyProfileController from "../../controllers/dashboard_company_profile_controller";
import iconEdit from "../../../assets/icons/icon-edit.svg";

class DashboardCompanyProfile extends DashboardCompanyProfileController {
  searchAndSort = () => {
    return <ComponentSortandSearch />;
  };
  cardLike = () => {
    return (
      <div className="row">
        <div className="col-3 p-2">
          <CardLike icon={iconEdit} />
        </div>
        <div className="col-3 p-2">
          <CardLike icon={iconEdit} />
        </div>
        <div className="col-3 p-2">
          <CardLike icon={iconEdit} />
        </div>
        <div className="col-3 p-2">
          <CardLike icon={iconEdit} />
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <DashboardNav title="Products" />
        <div className="mt-5 p-3">
          <div className="mt-5">
            <BannerCongratulations />
          </div>
          <div className="mt-2">{this.searchAndSort()}</div>
          {this.cardLike()} {this.cardLike()}{" "}
          <div className="d-flex justify-content-center pagination mt-2">
            <div className="bigText">
              <div>1</div>
            </div>
            <div className="bigText">
              <div>2</div>
            </div>
            <div className="bigText">
              <div className="active">3</div>
            </div>
            <div className="bigText">
              <div>4</div>
            </div>
            <div className="bigText">
              <div className="">5</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardCompanyProfile;
