import { IconWalletBlue } from "../../../../assets";
import PlanDetail from "../../../components/plan_detail";
import MembershipController from "../../../controllers/membership_controller";

export default class MembershipPage extends MembershipController {

  render() {
    const {
      fakeList,
    } = this.state;
    return (
      <div className="membership-Page w-100 d-flex flex-column align-items-center ">
        <div className="w-100 green-Background d-flex align-items-start justify-content-center">
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
              <img src={IconWalletBlue} width={32} height={32} />
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
            <PlanDetail list={fakeList[0]} />
            <PlanDetail list={fakeList[1]} />
            <PlanDetail list={fakeList[2]} />
            <PlanDetail list={fakeList[3]} />
            <PlanDetail list={fakeList[4]} />
          </div>
        </div>
      </div>
    );
  }
}
