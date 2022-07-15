import { IconAddCircleGreen, ImageTest } from "../../../../assets";
import BasicInformationExcess from "../../../components/basic_information_excess";
import {
  CardOfferHorizental,
  ComponentOtherDetail,
  ComponentRelatedItems,
  ComponentSortandSearch,
  ComponentTradeInformation,
} from "../../../components/components";
import DashboardNav from "../../../components/dashboard_nav";
import { SideNavItems } from "../../../components/side_nav_items";
import CompanyProfileProductController from "../../../controllers/dashboard_company_profile_controller";

export default class CompanyPofileExcess extends CompanyProfileProductController {

  addProductOne = () => {
    return (
      <div className="row">
        <div className="col-2">
          <SideNavItems
            onActive={(e) => this.handleShowSideNavItem(e)}
            items={this.TEST_NAV_ITEM}
          />
        </div>
        <div className="col-10 px-4 mt-5 ">
          {this.state.show == 0 && (
            <div>
              <BasicInformationExcess
                onClick={() => this.setState({ isShow: 0 })}
              />
            </div>
          )}
          {this.state.show == 1 && (
            <div>
              <ComponentOtherDetail />
            </div>
          )}
          {this.state.show == 2 && (
            <div>
              <ComponentTradeInformation />
            </div>
          )}
          {this.state.show == 3 && (
            <div>
              <ComponentRelatedItems />
            </div>
          )}
        </div>
      </div>
    );
  };
  render() {
    const landing = () => {
      return (
        <>
          <div className="banner w-100 d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-column">
              <span>Congratulations</span>
              <p>
                You have more than <span>8</span> Excess Capacity!
              </p>
            </div>
            <button onClick={() => this.setState({ isShow: 1 })}>
              <img src={IconAddCircleGreen} alt="add" className="me-2" />
              Add New Excess Capacity
            </button>
          </div>
          <div className="my-4">
            <ComponentSortandSearch />
          </div>
          <div className="mb-2">
            <div className="mb-3">
              <CardOfferHorizental
                edit={true}
                image={ImageTest}
                status={"FINISH PRODUCT"}
                description={
                  "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                }
                rate={4.2}
                country={"CHINA"}
                chart={this.TEST}
                amount={200}
                type="two"
                timeDelivery="98.6%"
                timeResponse="15h"
              />
            </div>
            <CardOfferHorizental
              edit={true}
              image={ImageTest}
              status={"FINISH PRODUCT"}
              description={
                "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
              }
              rate={4.2}
              country={"CHINA"}
              chart={this.TEST}
              amount={200}
              type="two"
              timeDelivery="98.6%"
              timeResponse="15h"
            />
          </div>
          <div>
            <span className="card-offer-title">
              Pomegranate Juice Pet Bottle, Best material and design, Ready to
              Order
            </span>
            <div className="mb-3 mt-2">
              <CardOfferHorizental
                edit={true}
                image={ImageTest}
                status={"FINISH PRODUCT"}
                description={
                  "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                }
                rate={4.2}
                country={"CHINA"}
                chart={this.TEST}
                amount={200}
                type="two"
                timeDelivery="98.6%"
                timeResponse="15h"
              />
            </div>
            <CardOfferHorizental
              edit={true}
              image={ImageTest}
              status={"FINISH PRODUCT"}
              description={
                "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
              }
              rate={4.2}
              country={"CHINA"}
              chart={this.TEST}
              amount={200}
              type="two"
              timeDelivery="98.6%"
              timeResponse="15h"
            />
          </div>
        </>
      );
    };
    return (
      <div className="company-profile-excess-page d-flex flex-column align-items-start">
        <div className="w-100">
          <DashboardNav title="Excess Capacity" />
        </div>
        <div className="content w-100">
          {this.state.isShow === 0 ? landing() : this.addProductOne()}
        </div>
      </div>
    );
  }
}
