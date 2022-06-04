import React, { Component } from "react";
import { BaseComponent } from "utilities_js";
import Component_search_bar from "../../components/component_search_bar";
import BottomNav from "../../layout/bottom_nav";
import Footer from "../../layout/footer";
import TopNav from "../../layout/top_nav";
interface IProps {}

interface IState {
  fakeList: any;
}

export class SearchResultExcessCapacity extends BaseComponent<IProps, IState> {
  render() {
    return (
      <div>
        <TopNav />
        <BottomNav />
        <Component_search_bar/>
        <Footer/>
      </div>
    );
  }
}

export default SearchResultExcessCapacity;
