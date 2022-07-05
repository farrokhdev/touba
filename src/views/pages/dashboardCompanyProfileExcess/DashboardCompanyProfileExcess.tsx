import { BaseComponent } from "utilities_js";
import { IconAddCircleGreen, ImageTest } from "../../../assets";

import {
  CardOfferHorizental,
  ComponentSortandSearch,
} from "../../components/components";
import DashboardNav from "../../components/dashboard_nav";

const TEST = [
  { name: "JAN", size: 20 },
  { name: "FEB", size: 30 },
  { name: "MAR", size: 40 },
  { name: "APR", size: 50 },
  { name: "MAY", size: 60 },
  { name: "JUN", size: 70 },
  { name: "JUL", size: 80 },
  { name: "AUG", size: 90 },
  { name: "SEP", size: 100 },
  { name: "OCT", size: 20 },
  { name: "NOV", size: 20 },
  { name: "DEC", size: 20 },
];
interface IProps {}

interface IState {
  isShow: number;
}
export default class DashboardCompanyPofileExcess extends BaseComponent<
  IProps,
  IState
> {
  state: IState = {
    isShow: 0,
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
                chart={TEST}
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
              chart={TEST}
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
                chart={TEST}
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
              chart={TEST}
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
          {this.state.isShow === 0 ? landing() : null}
        </div>
      </div>
    );
  }
}
