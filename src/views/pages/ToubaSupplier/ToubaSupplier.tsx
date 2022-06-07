import React, { Component } from "react";
import { BaseComponent } from "utilities_js";
import { CardOfferHorizontal } from "../../components/cars_offer_horizontal";
import Component_search_bar from "../../components/component_search_bar";
import BottomNav from "../../layout/bottom_nav";
import Footer from "../../layout/footer";
import TopNav from "../../layout/top_nav";
import image_test from "../../../assets/images/image-test.png";
import {
  CardLike,
  ComponentCapicityFilter,
  ComponentFilterRangeSlider,
  ComponentFilterSidebar,
  ComponentSuppliers,
  SelectComponent,
  SelectText,
} from "../../components/components";
interface IProps {}

interface IState {
  fakeList: any;
}

export class ToubaSupplier extends BaseComponent<IProps, IState> {
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
        <div className=" px-5">
          <div className="row p-3      ">
            <div className="col-3">
              <ComponentFilterSidebar showButton={true} />
            </div>
            <div className="col-9">
              <div className="p-2 d-flex align-items-center justify-content-between">
                <div className="bigText">221 Products</div>
                <div>
                  <SelectComponent type="one" />
                </div>
              </div>
              <div className="p-2 mt-4">
                <ComponentCapicityFilter />
              </div>

              <div className=" p-2">
                <ComponentSuppliers />
              </div>
              <div className="p-2">
                <ComponentSuppliers />
              </div>
              <div className="p-2">
                <ComponentSuppliers />
              </div>
              <div className="p-2">
                <ComponentSuppliers />
              </div>
              <div className="p-2">
                <ComponentSuppliers />
              </div>

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
        <Footer />
      </div>
    );
  }
}

export default ToubaSupplier;
