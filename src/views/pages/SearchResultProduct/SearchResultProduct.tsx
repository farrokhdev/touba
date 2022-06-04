import React, { Component } from "react";
import { BaseComponent } from "utilities_js";
import { CardOfferHorizontal } from "../../components/cars_offer_horizontal";
import Component_search_bar from "../../components/component_search_bar";
import BottomNav from "../../layout/bottom_nav";
import Footer from "../../layout/footer";
import TopNav from "../../layout/top_nav";
import image_test from "../../../assets/images/image-test.png";
import { CardLike } from "../../components/components";
interface IProps {}

interface IState {
  fakeList: any;
}

export class SearchResultProduct extends BaseComponent<IProps, IState> {
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
        <div className=" container">
          <div className="row p-3      ">
            <div className="col-2">s</div>
            <div className="col-10">
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
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchResultProduct;
