import { BaseComponent } from "utilities_js";
import PlanDetail from "../../components/plan_detail";

interface IProps {}

interface IState {
  fakeList: any;
}

export default class MembershipPage extends BaseComponent<IProps, IState> {
  state: IState = {
    fakeList: [
      {
        id: 1,
        plan: "Free Package",
        price: 0,
        one: 10,
        two: 10,
        three: "5 / Month",
        four: "5 / Month",
        five: "5 / Month",
        six: "",
        seven: "5 / Month",
        offer: false,
      },
      {
        id: 2,

        plan: "Bronze",
        price: 300,
        one: "Unlimited",
        two: "Unlimited",
        three: "Unlimited",
        four: "Unlimited",
        five: "Unlimited",
        six: 3,
        seven: "Unlimited",
        offer: false,
      },
      {
        id: 3,

        plan: "Silver",
        price: 900,
        one: "Unlimited",
        two: "Unlimited",
        three: "Unlimited",
        four: "Unlimited",
        five: "Unlimited",
        six: 5,
        seven: "Unlimited",
        offer: false,
      },
      {
        id: 4,

        plan: "Golden",
        price: 1700,
        one: "Unlimited",
        two: "Unlimited",
        three: "Unlimited",
        four: "Unlimited",
        five: "Unlimited",
        six: "Unlimited",
        seven: "Unlimited",
        offer: true,
      },
      {
        id: 5,

        plan: "Diamond",
        price: 3000,
        one: "Unlimited",
        two: "Unlimited",
        three: "Unlimited",
        four: "Unlimited",
        five: "Unlimited",
        six: "Unlimited",
        seven: "Unlimited",
        offer: false,
      },
    ],
  };
  render() {
    return (
      <div className="membership-Page w-100 d-flex flex-column align-items-center ">
        <div className="w-100 green-Background d-flex align-items-start justify-content-center ">
          <span className="mt-4">Membership Plans</span>
        </div>
        <div className="plans-Container d-flex flex-row align-items-end mx-auto">
          <div className="features d-flex flex-column align-items-center ">
            <span className=" d-flex flex-column align-items-center justify-content-center">
              Features
            </span>
            <span className=" d-flex flex-column align-items-center justify-content-center">
              Access user information
            </span>
            <span className=" d-flex flex-column align-items-center justify-content-center">
              Access user information
            </span>
            <span className=" d-flex flex-column align-items-center justify-content-center">
              post product
            </span>
            <span className=" d-flex flex-column align-items-center justify-content-center">
              post product
            </span>
            <span className=" d-flex flex-row align-items-center justify-content-center">
              {/* <img src={IconWalletBlue} width={32} height={32} /> */}
              Receive & respond to inquiries
            </span>
            <span className=" d-flex flex-column align-items-center justify-content-center">
              Keyword ads
            </span>
            <span className=" d-flex flex-column align-items-center justify-content-center">
              Receive & respond to inquiries
            </span>
          </div>
          <div className="d-flex flex-row plans">
            <PlanDetail list={this.state.fakeList[0]} />
            <PlanDetail list={this.state.fakeList[1]} />
            <PlanDetail list={this.state.fakeList[2]} />
            <PlanDetail list={this.state.fakeList[3]} />
            <PlanDetail list={this.state.fakeList[4]} />
          </div>
        </div>
      </div>
    );
  }
}
