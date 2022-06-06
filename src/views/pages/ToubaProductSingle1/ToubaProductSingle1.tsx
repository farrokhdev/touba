import React, { Component } from "react";
import { BaseComponent } from "utilities_js";
import { CardDetails, CardLike, CardMain, ComponentDetailPRoductSideCard, ComponentProductSideCard } from "../../components/components";
import Content from "../../components/content";
import BottomNav from "../../layout/bottom_nav";
import Footer from "../../layout/footer";
import TopNav from "../../layout/top_nav";

interface IProps {}

interface IState {
  fakeList: any;
}

export class ToubaProductSingle1 extends BaseComponent<IProps, IState> {
  test = "You are here: Touba >> Products";
  render() {
    return (
      <div>
        <TopNav />
        <BottomNav />
        <div className="px-5">
          <div className="smalText p-2">{this.test}</div>
          <div className="row">
            <div className="col-9 p-2">
              <div>
                <CardMain />
              </div>
            </div>
            <div className="col-3 p-2">
              <div>
                <ComponentProductSideCard />
              </div>
            </div>
          </div>
          <div>
            <div className="bigText mt-3">You may also like</div>
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
            <div className="bigText mt-3">Frequently bought together</div>
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
          <div>
            <div className="bigText mt-3">Supplier's popular products</div>
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

export default ToubaProductSingle1;
