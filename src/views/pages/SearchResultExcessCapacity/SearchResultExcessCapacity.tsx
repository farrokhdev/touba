import React, { Component } from "react";
import { BaseComponent } from "utilities_js";
import { CardOfferHorizontal } from "../../components/cars_offer_horizontal";
import Component_search_bar from "../../components/component_search_bar";
import BottomNav from "../../layout/bottom_nav";
import Footer from "../../layout/footer";
import TopNav from "../../layout/top_nav";
import image_test from "../../../assets/images/image-test.png";
import { ComponentFilterSidebar, ComponentFilterTopbar } from "../../components/components";
import { ButtonComponent } from "../../components/button";
interface IProps {}

interface IState {
  fakeList: any;
}

export class SearchResultExcessCapacity extends BaseComponent<IProps, IState> {
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
  render() {
    return (
      <div>
        <TopNav />
        <BottomNav />
        <Component_search_bar />
        <div className=" px-4">
          <div className="mt-3">
           <ComponentFilterTopbar/>
          </div>
          <div className="row p-3     ">
            <div className="col-2">
              <ComponentFilterSidebar showButton={false} />
            </div>
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchResultExcessCapacity;
