import React, { Component } from "react";
import { BaseComponent } from "utilities_js";
import {
  CardDetails,
  CardLike,
  CardMain,
  ComponentDetailPRoductSideCard,
  ComponentProductSideCard,
} from "../../components/components";
import ContentProduct from "../../components/content_product";
import BottomNav from "../../layout/bottom_nav";
import Footer from "../../layout/footer";
import TopNav from "../../layout/top_nav";
import honur from "../../../assets/images/honur.svg";
import image_test from "../../../assets/images/image-test.png";
import { CardProduct } from "../../components/card_product";

interface IProps {}

interface IState {
  isShow: boolean;
}

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

export class ToubaExcessCapacity extends BaseComponent<IProps, IState> {
  test = "You are here: Touba >> Products";
  state: IState = {
    isShow: false,
  };
  render() {
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
                  image={honur}
                  show={false}
                />
              </div>
            </div>
            <div className="col-3 p-2">
              <div>
                <ComponentProductSideCard
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bigText mt-3">You may also like</div>
            <div className="row mt-4">
              <div className="col-4 p-2">
                <CardProduct
                  image={image_test}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  chart={TEST}
                  amount={5}
                />
              </div>
              <div className="col-4 p-2">
                <CardProduct
                  image={image_test}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  chart={TEST}
                  amount={5}
                />
              </div>
              <div className="col-4 p-2">
                <CardProduct
                  image={image_test}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  chart={TEST}
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
                  image={image_test}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  chart={TEST}
                  amount={5}
                />
              </div>
              <div className="col-4 p-2">
                <CardProduct
                  image={image_test}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  chart={TEST}
                  amount={5}
                />
              </div>
              <div className="col-4 p-2">
                <CardProduct
                  image={image_test}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  chart={TEST}
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
        <Footer />
      </div>
    );
  }
}

export default ToubaExcessCapacity;
