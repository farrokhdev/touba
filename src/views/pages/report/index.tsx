import { Component } from "react";
import { IconArrow, IconDownload, IconDownloadWhite, IconUpload, ImageBox, ImageChat, ImageOil, ImageShop, ImageTwoUser, ImageWallet, ImageWorld, Iran } from "../../../assets";
import ActivityChart from "../../components/activity_chart";
import { ButtonOutline, ChartDoughnut, Divider, Summary, TextIconVertical } from "../../components/components";
import ComponentLineChart from "../../components/component_line_chart";
import DashboardNav from "../../components/dashboard_nav";
import ReportController from "../../controllers/report_controller";

class Report extends ReportController {
    render() {
        return (
            <div className="report">
                <DashboardNav title={"Reports"} />
                <div className="report-header">
                    <Summary
                        img={ImageWallet}
                        title={"Total Sales"}
                        amount={"$ 125,000"}
                    />
                    <Summary
                        img={ImageBox}
                        title={"Excess Capacity"}
                        amount={"6"}
                    />
                    <Summary
                        img={ImageShop}
                        title={"Your Products"}
                        amount={"364"}
                    />
                    <Summary
                        img={ImageTwoUser}
                        title={"Customers"}
                        amount={"1,274"}
                    />
                    <Summary
                        img={ImageChat}
                        title={"Inqury & Message"}
                        amount={"2,781 Chats"}
                    />
                </div>
                <div className="report-sales">
                    <div className="report-sales-countries">
                        <div className="report-sales-countries-map">
                            <h4>
                                Most Sales in Countries
                            </h4>
                            <img src={ImageWorld} alt="" />
                        </div>
                        <div className="report-sales-countries-divider">
                            <Divider direction={"horizontal"} />
                        </div>
                        <div className="report-sales-countries-flag">
                            <h6>
                                Top Countries
                            </h6>
                            <div className="report-sales-countries-flag-top">
                                <div className="report-sales-countries-flag-top-name">
                                    <img src={Iran} alt="" />
                                    <h6>
                                        Canada
                                    </h6>
                                </div>
                                <h5 className="report-sales-countries-flag-top-sale">
                                    <span>$</span>
                                    152,423
                                </h5>
                            </div>
                            <div className="report-sales-countries-flag-top">
                                <div className="report-sales-countries-flag-top-name">
                                    <img src={Iran} alt="" />
                                    <h6>
                                        Canada
                                    </h6>
                                </div>
                                <h5 className="report-sales-countries-flag-top-sale">
                                    <span>$</span>
                                    152,423
                                </h5>
                            </div>
                            <div className="report-sales-countries-flag-top">
                                <div className="report-sales-countries-flag-top-name">
                                    <img src={Iran} alt="" />
                                    <h6>
                                        Canada
                                    </h6>
                                </div>
                                <h5 className="report-sales-countries-flag-top-sale">
                                    <span>$</span>
                                    152,423
                                </h5>
                            </div>
                            <div className="report-sales-countries-flag-top">
                                <div className="report-sales-countries-flag-top-name">
                                    <img src={Iran} alt="" />
                                    <h6>
                                        Canada
                                    </h6>
                                </div>
                                <h5 className="report-sales-countries-flag-top-sale">
                                    <span>$</span>
                                    152,423
                                </h5>
                            </div>
                            <div className="report-sales-countries-flag-top">
                                <div className="report-sales-countries-flag-top-name">
                                    <img src={Iran} alt="" />
                                    <h6>
                                        Canada
                                    </h6>
                                </div>
                                <h5 className="report-sales-countries-flag-top-sale">
                                    <span>$</span>
                                    152,423
                                </h5>
                            </div>
                            <div className="report-sales-countries-flag-top">
                                <div className="report-sales-countries-flag-top-name">
                                    <img src={Iran} alt="" />
                                    <h6>
                                        Canada
                                    </h6>
                                </div>
                                <h5 className="report-sales-countries-flag-top-sale">
                                    <span>$</span>
                                    152,423
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="report-sales-download">
                        <div className="report-sales-download-report">
                            <h5 className="report-sales-download-report-title">
                                Download Reports
                            </h5>
                            <p className="report-sales-download-report-description">
                                Download Touba’s last year sales and marketing digest. It can help you to make the right decisions
                            </p>
                            <button className="report-sales-download-report-button">
                                <img src={IconDownload} alt="" />
                                <h5>
                                    TOUBA`S ANNUAL REPORT
                                </h5>
                            </button>
                        </div>
                        <div className="report-sales-download-summary">
                            <p className="report-sales-download-summary-description">
                                Download your annual sell/buy summary here. You can analaysis your products here.
                            </p>
                            <button className="report-sales-download-summary-button">
                                <img src={IconDownloadWhite} alt="" />
                                <h5>
                                    YOUR ANNUAL SUMMARY
                                </h5>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="report-summary">
                    <div className="report-summary-insights">
                        <h5 className="report-summary-insights-title">
                            Insights
                        </h5>
                        <Divider direction={"vertical"} />
                        <div className="report-summary-insights-details">
                            <div className="report-summary-insights-details-text">
                                <h6>
                                    21,214
                                </h6>
                                <p>
                                    Last Week
                                </p>
                            </div>
                            <Divider direction={"horizontal"} />
                            <div className="report-summary-insights-details-text">
                                <h6>
                                    21,214
                                </h6>
                                <p>
                                    Last Week
                                </p>
                            </div>
                            <Divider direction={"horizontal"} />
                            <div className="report-summary-insights-details-text">
                                <h6>
                                    21,214
                                </h6>
                                <p>
                                    Last Week
                                </p>
                            </div>
                        </div>
                        <Divider direction={"vertical"} />
                        <div className="report-summary-insights-product">
                            <h6 className="report-summary-insights-product-title">
                                Most Popular Product
                            </h6>
                            <div className="report-summary-insights-product-content">
                                <img src={ImageOil} alt="" />
                                <p>
                                    Pomegranate Juice Pet Bottle, Best material and design, Ready to Order
                                </p>
                            </div>
                        </div>
                        <div className="report-summary-insights-product">
                            <h6 className="report-summary-insights-product-title">
                                Most Popular Excess Capacity
                            </h6>
                            <div className="report-summary-insights-product-content">
                                <img src={ImageOil} alt="" />
                                <p>
                                    Pomegranate Juice Pet Bottle, Best material and design, Ready to Order
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="report-summary-chart">
                        <ComponentLineChart />
                    </div>
                </div>
                <div className="report-statistics">
                    <div className="report-statistics-activity">
                        <ActivityChart
                            datalist1={[
                                50, 80, 250, 200, 500, 700, 100, 625, 145, 500, 1236, 522,
                            ]}
                            datalist2={[
                                100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
                            ]}
                        />
                    </div>
                    <div className="report-statistics-details">
                        <div className="report-statistics-details-chart">
                            <div className="w-50">
                                <span>Sales </span>
                                <ChartDoughnut dataChart={["152423", "242423"]} />
                            </div>
                            <div className="w-50">
                                <span>Purchase</span>
                                <ChartDoughnut dataChart={["152423", "242423"]} />
                            </div>
                        </div>
                        <div className="report-statistics-details-keyword">
                            <h5 className="report-statistics-details-keyword-title">
                                Top Keywords
                            </h5>
                            <div className="report-statistics-details-keyword-button">
                                {this.KEYWORD.map((name, index) => (
                                    <ButtonOutline key={index} title={name} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Report;