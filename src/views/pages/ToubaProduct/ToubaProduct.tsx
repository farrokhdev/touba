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
  ComponentCapicityFilter,
  ComponentFilterRangeSlider,
  ComponentFilterSidebar,
  SelectComponent,
  SelectText,
} from "../../components/components";
interface IProps {}

interface IState {
  fakeList: any;
}

export class ToubaProduct extends BaseComponent<IProps, IState> {
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
        <div className=" px-5">
          <div className="row p-3      ">
            <div className="col-3">
              <ComponentFilterSidebar showButton={true} />
            </div>
            <div className="col-9">
              <div className="p-2">
                <ComponentFilterRangeSlider />
              </div>
              <div className="p-2 d-flex align-items-center justify-content-between">
                <div className="bigText">221 Products</div>
                <div>
                  <SelectComponent type="one" onSelect={function (name: string): void {
                    throw new Error("Function not implemented.");
                  } } />
                </div>
              </div>
              <div className="p-2 d-flex align-items-center mt-3">
                <ComponentCapicityFilter />
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
                  <CardLike />
                </div>
                <div className="col-4 p-2">
                  <CardLike />
                </div>

                <div className="col-4 p-2">
                  <CardLike />
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default ToubaProduct;
