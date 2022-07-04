import React, { Component } from "react";
import { BannerCongratulations } from "../../components/baner_congratulations";
import { CardLike, ComponentBasicInformation, ComponentSortandSearch } from "../../components/components";
import DashboardNav from "../../components/dashboard_nav";
import DashboardCompanyProfileController from "../../controllers/dashboard_company_profile_controller";
import iconEdit from "../../../assets/icons/icon-edit.svg";
import { SideNavItems } from "../../components/side_nav_items";
import { ButtonIcon } from "../../components/button_icon";
import CongratulationBanner from "../../components/congratulation_banner";

class DashboardCompanyProfile extends DashboardCompanyProfileController {
  TEST_NAV_ITEM = [
    {
      title: "Basic Information",
      id: 0,
    },
    {
      title: "Other Details",
      id: 1,
    },
    {
      title: "Trade Information",
      id: 2,
    },
    {
      title: "Related Items",
      id: 3,
    },
  ];
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
  test = () => {
    console.log(4);
  };
  starterPage = () => {
    return (
      <div className="mt-5 p-3">
        <div className="mt-5">
          <BannerCongratulations onClick={() => this.handleShowSection(2)} />
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
    );
  };
  addProductOne = () => {
    return (
      <div className="row">
        <div className="col-2">
          <SideNavItems
            onActive={(e) => this.handleShowSideNavItem(e)}
            items={this.TEST_NAV_ITEM}
          />
        </div>
        <div className="col-10 px-4 mt-5 pt-3">
        {this.state.show == 0 && (
            <div >
              <ComponentBasicInformation/>
            </div>
          )}
          {this.state.show == 1 && (
            <div style={{ width: "960px", height: "670px" }}>
              <CongratulationBanner activeTab="Other Details" />
            </div>
          )}
             {this.state.show == 3 && (
            <div style={{ width: "960px", height: "670px" }}>
              <CongratulationBanner activeTab="Related Items" />
            </div>
          )}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <DashboardNav title="Products" />
        {this.state.status == 1 && this.starterPage()}
        {this.state.status == 2 && this.addProductOne()}
      </div>
    );
  }
}
export default DashboardCompanyProfile;
