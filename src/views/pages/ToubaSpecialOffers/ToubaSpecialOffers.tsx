import React, { Component } from "react";
import { BaseComponent } from "utilities_js";
import { CardOfferHorizontal } from "../../components/cars_offer_horizontal";
import Component_search_bar from "../../components/component_search_bar";
import BottomNav from "../../layout/bottom_nav";
import Footer from "../../layout/footer";
import TopNav from "../../layout/top_nav_home";
import image_test from "../../../assets/images/image-test.png";
import {
  CardLike,
  ComponentFilterSidebar,
  ComponentFilterTopbar,
} from "../../components/components";
import { ButtonComponent } from "../../components/button";
import { ButtonOutline } from "../../components/button_outline";
import { ButtonSelect } from "../../components/button_select";
import ToubaSpecialOferControllers from "../../controllers/touba_special_offers";

export class ToubaSpecialOffers extends ToubaSpecialOferControllers {
  text = "You are here: Touba >> Products";

  TEST = [
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
  test = (e: boolean) => {
    this.setState({ showContent: e });
  };
  render() {
    return (
      <div>
        <div className=" px-5">
          <div className="smalText p-2">{this.text}</div>

          <div className="d-flex justify-content-center mt-3">
            <ButtonSelect
              onClick={(e: boolean) => this.test(e)}
              titleButton1="Products"
              titleButton2="Excess Capacity"
            />
          </div>
          <div className="row p-3     ">
            <div className="col-2">
              <ComponentFilterSidebar showButton={true} />
            </div>
            {!this.state.showContent && (
              <div className="col-10">
                <div className="p-2">
                  <CardOfferHorizontal
                    image={image_test}
                    status={"exp"}
                    description={
                      "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                    }
                    rate={4}
                    country={"chin"}
                    chart={this.TEST}
                    amount={5}
                    discountPercent={2}
                  />
                </div>
                <div className="p-2">
                  <CardOfferHorizontal
                    image={image_test}
                    status={"exp"}
                    description={
                      "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                    }
                    rate={4}
                    country={"chin"}
                    chart={this.TEST}
                    amount={5}
                    discountPercent={2}
                  />
                </div>
                <div className="p-2">
                  <CardOfferHorizontal
                    image={image_test}
                    status={"exp"}
                    description={
                      "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                    }
                    rate={4}
                    country={"chin"}
                    chart={this.TEST}
                    amount={5}
                    discountPercent={2}
                  />
                </div>
                <div className="p-2">
                  <CardOfferHorizontal
                    image={image_test}
                    status={"exp"}
                    description={
                      "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                    }
                    rate={4}
                    country={"chin"}
                    chart={this.TEST}
                    amount={5}
                    discountPercent={2}
                  />
                </div>
              </div>
            )}
            {this.state.showContent && (
              <div className="col-10">
                <div className="row">
                  <div className="col-4 p-2">
                    <CardLike discount={true} percent={'6'} />
                  </div>
                  <div className="col-4 p-2">
                    <CardLike />
                  </div>

                  <div className="col-4 p-2">
                    <CardLike />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 p-2">
                    <CardLike />
                  </div>
                  <div className="col-4 p-2">
                    <CardLike />
                  </div>

                  <div className="col-4 p-2">
                    <CardLike />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 p-2">
                    <CardLike  />
                  </div>
                  <div className="col-4 p-2">
                    <CardLike />
                  </div>

                  <div className="col-4 p-2">
                    <CardLike />
                  </div>
                </div>
              </div>
            )}
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
      </div>
    );
  }
}

export default ToubaSpecialOffers;
