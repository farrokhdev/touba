import { ImageTest } from "../../../../assets";
import { CardProduct } from "../../../components/card_product";
import { CardMain, ComponentProductSideCard, CardDetails, ComponentDetailPRoductSideCard, CardLike } from "../../../components/components";
import Inquiry from "../../../components/inquiry";
import ExcessCapacityController from "../../../controllers/excess_capacity_controller";

export class ToubaExcessCapacity extends ExcessCapacityController {

  render() {
    const {
      isShow,
    } = this.state;
    return (
      <div>
        <div className="px-5">
          <div className="smalText p-2">{this.test}</div>
          <div className="row">
            <div className="col-9 p-2">
              <div>
                <CardMain
                  tabItemOne="Excess Capacity"
                  tabItemTwo="Related Products"
                  image={ImageTest}
                  show={false}
                />
              </div>
            </div>
            <div className="col-3 p-2">
              <div>
                <ComponentProductSideCard
                  handleAddToCart={() => this.showInquiry()}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bigText mt-3">You may also like</div>
            <div className="row mt-4">
              <div className="col-4 p-2">
                <CardProduct
                  image={ImageTest}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  chart={this.TEST}
                  amount={5}
                />
              </div>
              <div className="col-4 p-2">
                <CardProduct
                  image={ImageTest}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  chart={this.TEST}
                  amount={5}
                />
              </div>
              <div className="col-4 p-2">
                <CardProduct
                  image={ImageTest}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  chart={this.TEST}
                  amount={5}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bigText mt-4">Product Details</div>
            <div className="row mt-4">
              <div className="col-9 p-2">
                <CardDetails />
              </div>
              <div className="col-3 p-2">
                <div>
                  <ComponentDetailPRoductSideCard />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bigText mt-3">
              Supplier's Other Excess Capacities
            </div>
            <div className="row mt-4">
              <div className="col-4 p-2">
                <CardProduct
                  image={ImageTest}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  chart={this.TEST}
                  amount={5}
                />
              </div>
              <div className="col-4 p-2">
                <CardProduct
                  image={ImageTest}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  chart={this.TEST}
                  amount={5}
                />
              </div>
              <div className="col-4 p-2">
                <CardProduct
                  image={ImageTest}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  chart={this.TEST}
                  amount={5}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bigText mt-3">Supplier's products</div>
            <div className="row mt-4">
              <div className="col-3 p-2">
                <CardLike />
              </div>
              <div className="col-3 p-2">
                <CardLike />
              </div>
              <div className="col-3 p-2">
                <CardLike />
              </div>
              <div className="col-3 p-2">
                <CardLike />
              </div>
            </div>
          </div>
        </div>
        {isShow ? (
          <div className="product-Inquiry d-flex flex-row">
            <div
              className="blur-Background"
              onClick={() => this.setState({ isShow: false })}
            >
              <span>sv</span>
            </div>
            <Inquiry />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ToubaExcessCapacity;
