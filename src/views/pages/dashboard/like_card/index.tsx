import DashboardNav from "../../../components/dashboard_nav";
import { CardLike, CardOfferHorizental } from "../../../components/components";
import DashboardLikeCardControllre from "../../../controllers/dashboard_like_card_controller";
import ItemProfile from "../../../components/item_profile";
import { ImageTest } from "../../../../assets";

export default class DashboardLikeCard extends DashboardLikeCardControllre {
  render() {
    return (
      <div>
        <div className="">
          <DashboardNav title="Liked Items" />
        </div>
        <div className=" row mt-3 justify-content-center align-items-center">
          <div className=" col-5 nav-like-box  d-flex  justify-content-center align-items-center px-3">
            <div onClick={() => this.handleShow(1)} className={`col-4 text-center ${this.state.filter == 1 && 'active'}`}>
              <div >Products</div>
            </div>
            <div onClick={() => this.handleShow(2)} className={`col-4 text-center ${this.state.filter == 2 && 'active'}`}>
              <div>Excess Capacity</div>
            </div>

            <div onClick={() => this.handleShow(3)} className={`col-4 text-center ${this.state.filter == 3 && 'active'}`}>
              <div>Profiles</div>
            </div>
          </div>
        </div>
        {this.state.filter == 1 && (
          <>
            {" "}
            <div className="row">
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
            </div>
            <div className="row">
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
            </div>
          </>
        )}
        {this.state.filter == 2 && (
          <>
            {" "}
            <div className="row">
              <div className="col-12 p-2">
                {" "}
                <CardOfferHorizental
                  image={ImageTest}
                  status={"FINISH PRODUCT"}
                  description={"Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"}
                  rate={4.2}
                  country={"CHINA"}
                  chart={this.TEST}
                  amount={200}
                  type="two"
                  timeDelivery="98.6%"
                  timeResponse="15h"
                />
              </div>
              <div className="col-12 p-2">
                {" "}
                <CardOfferHorizental
                  image={ImageTest}
                  status={"FINISH PRODUCT"}
                  description={"Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"}
                  rate={4.2}
                  country={"CHINA"}
                  chart={this.TEST}
                  amount={200}
                  type="two"
                  timeDelivery="98.6%"
                  timeResponse="15h"
                />
              </div>
              <div className="col-12 p-2">
                {" "}
                <CardOfferHorizental
                  image={ImageTest}
                  status={"FINISH PRODUCT"}
                  description={"Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"}
                  rate={4.2}
                  country={"CHINA"}
                  chart={this.TEST}
                  amount={200}
                  type="two"
                  timeDelivery="98.6%"
                  timeResponse="15h"
                />
              </div>
              <div className="col-12 p-2">
                {" "}
                <CardOfferHorizental
                  image={ImageTest}
                  status={"FINISH PRODUCT"}
                  description={"Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"}
                  rate={4.2}
                  country={"CHINA"}
                  chart={this.TEST}
                  amount={200}
                  type="two"
                  timeDelivery="98.6%"
                  timeResponse="15h"
                />
              </div>
            </div>
          </>
        )}
        {this.state.filter == 3 && (
          <>
            {" "}
            <div className="row">
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
            </div>
            <div className="row">
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
