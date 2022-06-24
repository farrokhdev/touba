import React, { Component } from "react";
import { ButtonIcon } from "../../components/button_icon";
import { ComponentKeyWord, ComponentMapBox, ComponentProgress } from "../../components/components";
import ComponentDashboardHeader from "../../components/component_dashboard_header";
import ComponentLineChart from "../../components/component_line_chart";
import Dashboard from "../../layout/dashboard/dashobord";

import IconPlus from '../../../assets/icons/icon-plus.svg'
export default class DashboardPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <Dashboard />
        </div>
        <div className="col-8 px-5">
          <div className="border-bottom mb-4">
            {" "}
            <div className=" bigText border-bottom">Dashboard</div>
          </div>
          <div className="mt-5 p-3 pt-5 ">
            <ComponentDashboardHeader />
          </div>
          <div className=" mt-2">
            <div className="bigText">Last Status</div>
          </div>
          <div className="mt-3 p-3">
            <ComponentLineChart />
          </div>
        </div>
        <div className="col-3 bg-white">
            <div className="p-3">
                <div className="btn-add-new d-flex justify-content-betwee py-2 px-1 align-items-center col-4">
                    <img src={IconPlus}/>
                    <div>ADD NEW</div>
                </div>
            </div>
          <div className="p-3 border-bottom">
            <ComponentProgress />
          </div>
          <div className="p-3 border-bottom">
            <ComponentProgress />
          </div>
          <div className="p-3 border-bottom">
            <ComponentProgress />
          </div>
          <div className="p-3 border-bottom">
            <ComponentProgress />
          </div>
          <div className="d-flex justify-content-between align-items-center p-3">
          <div>Insights</div>
          <div>View All</div>
        </div>
        <div className="p-3">
            <ComponentMapBox/>
        </div>
        <div className="p-3">
            <ComponentKeyWord/>
        </div>
        </div>
       
      </div>
    );
  }
}
