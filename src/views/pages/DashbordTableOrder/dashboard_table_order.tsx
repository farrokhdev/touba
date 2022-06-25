import React, { Component } from "react";
import { ButtonSelect } from "../../components/button_select";
import { ComponentSearch, ComponentTableORder, SelectComponent } from "../../components/components";
import DashboardNav from "../../components/dashboard_nav";
import iconSearch from "../../../assets/icons/icon-search.svg";


export default class DashboardTableOrder extends Component {
  render() {
    return (
      <div>
        <div>
          <DashboardNav title="Orders" />
        </div>
        <div className="d-flex align-items-center justify-content-center py-3">
          <ButtonSelect titleButton1="Your Orders" titleButton2="Sales List" />
        </div>
        <div className="row  align-items-center d-flex p-3 ">
          <div className="table-box">
            <div className="row border-bottom d-flex align-items-center ">
              <div className="col-6 ">
                <div className="row d-flex -align-items-center ">
                  <div className="col-4 text-center ">
                    <div className="item-nav item-active py-4 ">Products</div>
                  </div>
                  <div className="col-4 text-center ">
                    <div className="item-nav py-4 ">Excess Capacity</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row d-flex align-items-center justify-content-center px-2">
                    <div className="col-8 ">
                        <div className="search-table d-flex">
                            <div className="">
                                <img src={iconSearch}/>
                            </div>
                            <input className="input-search" placeholder="Search in Orders"/>
                        </div>
                    </div>
                    <div className="col-4 px-2">
                        <SelectComponent type="one" onSelect={()=>{}} placeholder='Status Sorting'/>
                    </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
                <ComponentTableORder/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
