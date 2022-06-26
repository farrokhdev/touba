import React, { Component } from "react";
import { ButtonIcon } from "../../components/button_icon";
import {
  ButtonIconDashboard,
  ComponentKeyWord,
  ComponentMapBox,
  ComponentProgress,
  Offcanvas,
} from "../../components/components";
import ComponentDashboardHeader from "../../components/component_dashboard_header";
import ComponentLineChart from "../../components/component_line_chart";
import Dashboard from "../../layout/dashboard/dashobord";
import iconRing from "../../../assets/icons/icon-ring.svg";
import IconPlus from "../../../assets/icons/icon-plus.svg";
import IconChat from "../../../assets/icons/icon-chat.svg";
import IconUser from "../../../assets/icons/icon-user.svg";
import iconArrowDown from '../../../assets/images/arrowdown.png'
import { CardGroupChat } from "../../components/card_group_chat";
import { ImageNasa } from "../../../assets";

export default class DashboardPage extends Component {
  render() {
    return (
      <div className="row">

        <div className="col-9 px-3">
          <div className="border-bottom mb-4">
            {" "}
            <div className=" bigText border-bottom">Dashboard</div>
          </div>
          <div className="mt-5 pt-5 ">
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
          <div className="p-3 row d-flex align-items-center">
            <div className="col-4">
              <div className="btn-add-new d-flex justify-content-center py-2 px-1 align-items-center ">
                <img src={IconPlus} />
                <div>ADD NEW</div>
              </div>
            </div>
            <div className="col-2 ">
              <div className="p-1">
                <ButtonIconDashboard icon={iconRing} />
              </div>
            </div>
            <div className="col-3 ">
              <div className="p-3">
                <Offcanvas>
                  <CardGroupChat
                    title={"Group Title"}
                    amountMessage={7}
                    message={" message Here"}
                    images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                    date={"25 MINS"}
                  />
                  <CardGroupChat
                    title={"Group Title"}
                    amountMessage={7}
                    message={" message Here"}
                    images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                    date={"25 MINS"}
                  />
                  <CardGroupChat
                    title={"Group Title"}
                    amountMessage={7}
                    message={" message Here"}
                    images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                    date={"25 MINS"}
                  />
                  <CardGroupChat
                    title={"Group Title"}
                    amountMessage={7}
                    message={" message Here"}
                    images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                    date={"25 MINS"}
                  />
                  <CardGroupChat
                    title={"Group Title"}
                    amountMessage={7}
                    message={" message Here"}
                    images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                    date={"25 MINS"}
                  />
                  <CardGroupChat
                    title={"Group Title"}
                    amountMessage={7}
                    message={" message Here"}
                    images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                    date={"25 MINS"}
                  />
                </Offcanvas>
                <ButtonIconDashboard icon={IconChat} dataBsToggle="offcanvas" dataBsTarget="#offcanvasRight" aria-controls="offcanvasRight" />
              </div>
            </div>
            <div className="col-2 ">
              <div className="">
                <ButtonIconDashboard icon={IconUser} dropdown="" />
              </div>
            </div>
            <div className="col-1 px-2">
              <div>
                <img src={iconArrowDown} />
              </div>
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
            <ComponentMapBox />
          </div>
          <div className="p-3">
            <ComponentKeyWord />
          </div>
        </div>
      </div>
    );
  }
}
