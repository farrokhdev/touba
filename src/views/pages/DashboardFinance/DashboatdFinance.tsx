import { BaseComponent } from "utilities_js";
import {
  IconAddCircle,
  IconChartRed,
  IconChat,
  IconNotification,
  IconProfile,
  IconShop,
  ImageNasa,
  ImageOil,
} from "../../../assets";
import ActivityChart from "../../components/activity_chart";
import { ButtonIconDashboard } from "../../components/button_icon_dashboard";
import { CardGroupChat } from "../../components/card_group_chat";
import { CardOverall } from "../../components/card_overrall";
import { ChartDoughnut } from "../../components/chart_doughnut";
import { ChartSale } from "../../components/chart_sale";
import {
  Calendar,
  ComponentMessage,
  ComponentMessageImage,
} from "../../components/components";
import ComponentLineChart from "../../components/component_line_chart";
import DashboardNav from "../../components/dashboard_nav";
import { Offcanvas } from "../../components/offcanvas";
import { SideNavItems } from "../../components/side_nav_items";
import SummaryDashboard from "../../components/summary_dashboard";
import { TableTransaction } from "../../components/table_transactions";
import DashboarPageController from "../../controllers/dashboard_page_controller";

export default class DashboardFinance extends DashboarPageController {
  render() {
    const TEST_NAV_ITEM = [
      {
        title: "Overview",
        active: true,
        location: "/",
        id: 1,
      },
      {
        title: "Sold Items",
        active: false,
        location: "/test",
        id: 2,
      },
      {
        title: "Purchased Items",
        active: false,
        location: "/",
        id: 3,
      },
      {
        title: "Redeemed Invoices",
        active: false,
        location: "/",
        id: 4,
      },
      {
        title: "Income/Pay Calendar",
        active: false,
        location: "/",
        id: 5,
      },
    ];
    return (
      <div className="finance-page d-flex flex-row align-items-start">
        <div className="content mx-auto">
          <div className="title">
            <span>Finance</span>
          </div>
          <div className="row">
            <div className="left-sidebar  col-3">
              <SideNavItems items={TEST_NAV_ITEM} />
            </div>
            <div className="col-9">
              <div className="ps-4 pe-3">
                <div>
                  <SummaryDashboard
                    price1="18,251"
                    price2="78,681"
                    price3="3,524"
                  />
                </div>
                <div className="my-3">
                  <ComponentLineChart />
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between chartdoughnut-container">
                  <div className="w-50">
                    <span>Sales </span>
                    <ChartDoughnut dataChart={["152423", "242423"]} />
                  </div>
                  <div className="w-50">
                    <span>Purchase</span>
                    <ChartDoughnut dataChart={["152423", "242423"]} />
                  </div>
                </div>
                <div className="my-3">
                  <ActivityChart
                    datalist1={[
                      50, 80, 250, 200, 500, 700, 100, 625, 145, 500, 1236, 522,
                    ]}
                    datalist2={[
                      100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100,
                      1200,
                    ]}
                  />
                </div>
                <div>
                  {/* <TableTransaction   /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <div className=" px-3 row d-flex align-items-center">
            <div className="col-12 dashboard-Nav d-flex">
              <div className="btn-Container align-items-center d-flex">
                <button className="add-Btn d-flex align-items-center">
                  <img src={IconAddCircle} alt="add" />
                  <span>ADD NEW</span>
                </button>
                <div className="col-2 ">
                  <div className="">
                    <ButtonIconDashboard icon={IconNotification} />
                  </div>
                </div>
                <div className="col-3 ">
                  <div className="mx-1">
                    <Offcanvas onActive={this.handleActiveTab}>
                      {this.state.active === 3 ? (
                        <>
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                            ]}
                            date={"25 MINS"}
                            disabled={false}
                          />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                            ]}
                            date={"25 MINS"}
                            disabled={false}
                          />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                            ]}
                            date={"25 MINS"}
                            disabled={false}
                          />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                            ]}
                            date={"25 MINS"}
                            disabled={false}
                          />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                            ]}
                            date={"25 MINS"}
                            disabled={false}
                          />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                            ]}
                            date={"25 MINS"}
                            disabled={true}
                          />
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
                    <ButtonIconDashboard
                      icon={IconChat}
                      dataBsToggle="offcanvas"
                      dataBsTarget="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    />
                  </div>
                </div>
                <div className="col-2 ">
                  <div className="">
                    <ButtonIconDashboard icon={IconProfile} dropdown="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-items-start overall">
            <span className="title">Overall Summary</span>
            <CardOverall
              image={IconShop}
              type={"Product"}
              amountSold={120524}
              amountBought={35183}
            />
            <CardOverall
              image={IconChartRed}
              type={"Product"}
              amountSold={120524}
              amountBought={35183}
            />
          </div>
          <div>
            <ChartSale />
          </div>
          <div>{/* <Calendar /> */}</div>
        </div>
      </div>
    );
  }
}
