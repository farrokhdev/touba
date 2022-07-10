import {
  IconAddCircle,
  IconChartRed,
  IconChat,
  IconNotification,
  IconProfile,
  IconShop,
  ImageDeliveryMan,
  ImageManMoney,
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
  ComponentCalender,
  ComponentMessage,
  ComponentMessageImage,
  ComponentSoldBox,
  Map,
} from "../../components/components";
import ComponentLineChart from "../../components/component_line_chart";
import { Offcanvas } from "../../components/offcanvas";
import OrderTableDashboard from "../../components/order_table_dashbard";
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
    const overview = () => {
      return (
        <div className="ps-4 pe-3">
          <div>
            <SummaryDashboard price1="18,251" price2="78,681" price3="3,524" />
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
                100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
              ]}
            />
          </div>
          <div>
            <TableTransaction
              transactionBtn={true}
              title="Recent Transactions"
              items={this.TABLE}
            />
          </div>
        </div>
      );
    };
    const soldItems = () => {
      return (
        <div className="ps-4 pe-3">
          <div className="top-section d-flex flex-row align-items-center ">
            <div>
              <ComponentSoldBox />
            </div>
            <div className="icon-button-container d-flex flex-column align-items-center mx-3">
              <div className="d-flex flex-column align-items-center justify-content-center icon-button">
                <img src={IconShop} alt="shop" />
                <span>48 Prodcts</span>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center icon-button">
                <img src={IconChartRed} alt="shop" />
                <span>5 Excess Capacity</span>
              </div>
            </div>
            <div className="map">
              <span>Sales Maps</span>
              <Map />
            </div>
          </div>
          <div className="my-4">
            <TableTransaction transactionBtn={true} items={this.TABLE} />
          </div>
          <div className="order-table">
            <div className="row d-flex -align-items-center table-box w-50">
              <div
                onClick={() => this.handleShow(1)}
                className="col-4 text-center "
              >
                <div
                  className={`item-nav ${
                    this.state.filter == 1 && "item-active"
                  } py-4 `}
                >
                  Products
                </div>
              </div>
              <div
                onClick={() => this.handleShow(2)}
                className="col-4 text-center "
              >
                <div
                  className={`item-nav ${
                    this.state.filter == 2 && "item-active"
                  } py-4 `}
                >
                  Excess Capacity
                </div>
              </div>
            </div>
            <OrderTableDashboard />
          </div>
        </div>
      );
    };
    const purchasedItems = () => {
      return (
        <div className="ps-4 pe-3">
          <div className="top-banner d-flex flex-row align-items-end justify-content-between">
            <div>
              <span>Congratulations</span>
              <p>
                You have a new order to deliver. Please check the shipping
                instructure.
              </p>
              <button>Shipping instructure</button>
            </div>
            <img src={ImageDeliveryMan} alt="banner" />
          </div>
          <div className="my-4">
            <TableTransaction
              transactionBtn={true}
              title="Outgoing Transactions"
              items={this.TABLE}
            />
          </div>
          <div className="order-table">
            <div className="row d-flex -align-items-center table-box w-50">
              <div
                onClick={() => this.handleShow(1)}
                className="col-4 text-center "
              >
                <div
                  className={`item-nav ${
                    this.state.filter == 1 && "item-active"
                  } py-4 `}
                >
                  Products
                </div>
              </div>
              <div
                onClick={() => this.handleShow(2)}
                className="col-4 text-center "
              >
                <div
                  className={`item-nav ${
                    this.state.filter == 2 && "item-active"
                  } py-4 `}
                >
                  Excess Capacity
                </div>
              </div>
            </div>
            <OrderTableDashboard />
          </div>
        </div>
      );
    };
    const redeemedInvoices = () => {
      return (
        <div className="ps-4 pe-3">
          <div className="top-banner d-flex flex-row align-items-end justify-content-between">
            <div className="mb-5">
              <span>Congratulations</span>
              <p>
                You have a new order to deliver. Please check the shipping
                instructure.
              </p>
            </div>
            <img src={ImageManMoney} alt="banner" />
          </div>
          <div className="my-4">
            <TableTransaction
              transactionBtn={true}
              title="Last Transactions"
              items={this.TABLE}
            />
          </div>
        </div>
      );
    };
    const incomePayCalendar = () => {
      return (
        <div className="ps-4 pe-3">
          <ComponentCalender />
        </div>
      );
    };
    return (
      <div className="finance-page d-flex flex-row align-items-start">
        <div className="content mx-auto">
          <div className="title">
            <span>Finance</span>
          </div>
          <div className="row">
            <div className="left-sidebar">
              <SideNavItems
                items={TEST_NAV_ITEM}
                onActive={this.handleGetActiveLink}
              />
            </div>
            <div className="center-content">
              {this.state.activeLink === 1
                ? overview()
                : this.state.activeLink === 2
                ? soldItems()
                : this.state.activeLink === 3
                ? purchasedItems()
                : this.state.activeLink === 4
                ? redeemedInvoices()
                : this.state.activeLink === 5
                ? incomePayCalendar()
                : null}
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <div className=" px-3 row d-flex align-items-center">
            <div className="col-12 dashboard-Nav d-flex">
              <div className="btn-Container align-items-center d-flex flex-row ">
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
          <div className="my-3">
            <ChartSale />
          </div>
          <div className="calendar">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}
