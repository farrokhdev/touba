import React, { Component } from "react";
import { ButtonIcon } from "../../components/button_icon";
import {
  ButtonIconDashboard,
  ComponentKeyWord,
  ComponentMapBox,
  ComponentMessage,
  ComponentMessageImage,
  ComponentProgress,
  Offcanvas,
  Summary,
} from "../../components/components";
import {
  IconAddCircle,
  IconArrowBlack,
  IconChat,
  IconNotification,
  IconProfile,
} from "../../../assets";
import ComponentDashboardHeader from "../../components/component_dashboard_header";
import ComponentLineChart from "../../components/component_line_chart";
import Dashboard from "../../layout/dashboard/dashobord";
import iconRing from "../../../assets/icons/icon-ring.svg";
import IconPlus from "../../../assets/icons/icon-plus.svg";
import IconUser from "../../../assets/icons/icon-user.svg";
import iconArrowDown from '../../../assets/images/arrowdown.png'
import { CardGroupChat } from "../../components/card_group_chat";
import { ImageNasa, ImageOil } from "../../../assets";
import DashboarPageController from "../../controllers/dashboard_page_controller";
import iconWallet from "../../../assets/icons/icon-wallet-total.svg";

export default class DashboardPage extends DashboarPageController {
  render() {
    return (
      <div className="row">
        <div className="col-9 ">
          <div className="border-bottom mb-4">
            {" "}
            <div className=" bigText border-bottom p-4">Dashboard</div>
          </div>
          <div className="mt-5 pt-5 ">
            <ComponentDashboardHeader />
          </div>
          <div className=" mt-5 ">
            <div className="boldText px-3">Last Status</div>
            <div className="row mt-3">
              <div className="col-3 p-2">
                <Summary
                  img={iconWallet}
                  title={"Total Income:"}
                  amount={"$ 125,000"}
                />
              </div>
              <div className="col-3 p-2">
                <Summary
                  img={iconWallet}
                  title={"Total Income:"}
                  amount={"$ 125,000"}
                />
              </div>
              <div className="col-3 p-2">
                <Summary
                  img={iconWallet}
                  title={"Total Income:"}
                  amount={"$ 125,000"}
                />
              </div>
              <div className="col-3 p-2">
                <Summary
                  img={iconWallet}
                  title={"Total Income:"}
                  amount={"$ 125,000"}
                />
              </div>
            </div>
          </div>
          <div className="mt-3 p-3">
            <ComponentLineChart />
          </div>
        </div>
        <div className="col-3 bg-white">
          <div className=" px-3 row d-flex align-items-center">
            <div className="col-12 dashboard-Nav d-flex">
              <div className="btn-Container align-items-center d-flex">
                <button className="add-Btn w-100">
                  <img src={IconAddCircle} alt="add" />
                  <span>ADD NEW</span>
                </button>
                <button className="icon-Btn">
                  <img src={IconNotification} alt="notification" />
                </button>
                <button className="icon-Btn">
                  <img src={IconChat} alt="chat" />
                </button>
                <button className="icon-Btn">
                  <img src={IconProfile} alt="profile" />
                </button>
                <button className="arrow-Btn">
                  <img src={IconArrowBlack} alt="profile" />
                </button>
              </div>
            </div>
            <div className="col-2 ">
              <div className="p-1">
                <ButtonIconDashboard icon={iconRing} />
              </div>
            </div>
            <div className="col-3 ">
              <div className="p-3">
                <Offcanvas onActive={this.handleActiveTab}>
                  {this.state.active === 3 ? (
                    <>
                      <CardGroupChat
                        title={"Group Title"}
                        amountMessage={7}
                        message={" message Here"}
                        images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                        date={"25 MINS"} disabled={false} />
                      <CardGroupChat
                        title={"Group Title"}
                        amountMessage={7}
                        message={" message Here"}
                        images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                        date={"25 MINS"} disabled={false} />
                      <CardGroupChat
                        title={"Group Title"}
                        amountMessage={7}
                        message={" message Here"}
                        images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                        date={"25 MINS"} disabled={false} />
                      <CardGroupChat
                        title={"Group Title"}
                        amountMessage={7}
                        message={" message Here"}
                        images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                        date={"25 MINS"} disabled={false} />
                      <CardGroupChat
                        title={"Group Title"}
                        amountMessage={7}
                        message={" message Here"}
                        images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                        date={"25 MINS"} disabled={false} />
                      <CardGroupChat
                        title={"Group Title"}
                        amountMessage={7}
                        message={" message Here"}
                        images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                        date={"25 MINS"} disabled={true} />
                    </>
                  ) : (
                    <>
                      {this.state.active === 2 ? (
                        <>
                          <ComponentMessage />
                          <ComponentMessage />
                          <ComponentMessage />
                          <ComponentMessage />
                          <ComponentMessage />
                          <ComponentMessage />
                          <ComponentMessage />
                        </>
                      ) : (
                        <>
                          <ComponentMessageImage
                            title={"Message Title Here"}
                            desc={"Quanzhou Laren Trading Co., Ltd."}
                            country={"CHINA"}
                            time={"1HOUR"}
                            image={ImageOil}
                          />
                          <ComponentMessageImage
                            title={"Message Title Here"}
                            desc={"Quanzhou Laren Trading Co., Ltd."}
                            country={"CHINA"}
                            time={"1HOUR"}
                            image={ImageOil}
                          />
                          <ComponentMessageImage
                            title={"Message Title Here"}
                            desc={"Quanzhou Laren Trading Co., Ltd."}
                            country={"CHINA"}
                            time={"1HOUR"}
                            image={ImageOil}
                          />
                          <ComponentMessageImage
                            title={"Message Title Here"}
                            desc={"Quanzhou Laren Trading Co., Ltd."}
                            country={"CHINA"}
                            time={"1HOUR"}
                            image={ImageOil}
                          />
                          <ComponentMessageImage
                            title={"Message Title Here"}
                            desc={"Quanzhou Laren Trading Co., Ltd."}
                            country={"CHINA"}
                            time={"1HOUR"}
                            image={ImageOil}
                          />
                          <ComponentMessageImage
                            title={"Message Title Here"}
                            desc={"Quanzhou Laren Trading Co., Ltd."}
                            country={"CHINA"}
                            time={"1HOUR"}
                            image={ImageOil}
                          />
                          <ComponentMessageImage
                            title={"Message Title Here"}
                            desc={"Quanzhou Laren Trading Co., Ltd."}
                            country={"CHINA"}
                            time={"1HOUR"}
                            image={ImageOil}
                          />
                          <ComponentMessageImage
                            title={"Message Title Here"}
                            desc={"Quanzhou Laren Trading Co., Ltd."}
                            country={"CHINA"}
                            time={"1HOUR"}
                            image={ImageOil}
                          />
                          <ComponentMessageImage
                            title={"Message Title Here"}
                            desc={"Quanzhou Laren Trading Co., Ltd."}
                            country={"CHINA"}
                            time={"1HOUR"}
                            image={ImageOil}
                          />
                          <ComponentMessageImage
                            title={"Message Title Here"}
                            desc={"Quanzhou Laren Trading Co., Ltd."}
                            country={"CHINA"}
                            time={"1HOUR"}
                            image={ImageOil}
                          />
                        </>
                      )}
                    </>
                  )}

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
