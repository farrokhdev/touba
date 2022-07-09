import { Component } from "react";
import { IconArrow, IconDownload, IconDownloadWhite, IconUpload, ImageBox, ImageChat, ImageOil, ImageShop, ImageTwoUser, ImageWallet, ImageWorld, Iran } from "../../../assets";
import ActivityChart from "../../components/activity_chart";
import { ButtonOutline, ChartDoughnut, Divider, Summary, TextIconVertical } from "../../components/components";
import ComponentLineChart from "../../components/component_line_chart";
import DashboardNav from "../../components/dashboard_nav";
import ReportController from "../../controllers/report_controller";
import Sales from "./sales";
import Statistics from "./statistics";
import SummaryPage from "./summary";

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
                    <Sales />
                </div>
                <div className="report-summary">
                    <SummaryPage />
                </div>
                <div className="report-statistics">
                    <Statistics />
                </div>
            </div>
        )
    }

}

export default Report;