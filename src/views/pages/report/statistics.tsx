import React from "react";
import { Component } from "react";
import { IconArrow, IconDownload, IconDownloadWhite, IconUpload, ImageBox, ImageChat, ImageOil, ImageShop, ImageTwoUser, ImageWallet, ImageWorld, Iran } from "../../../assets";
import ActivityChart from "../../components/activity_chart";
import { ButtonOutline, ChartDoughnut, Divider, Summary, TextIconVertical } from "../../components/components";
import ComponentLineChart from "../../components/component_line_chart";
import DashboardNav from "../../components/dashboard_nav";
import ReportController from "../../controllers/report_controller";

class Statistics extends ReportController {
    render() {
        return (
            <>
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
            </>
        )
    }
}

export default Statistics;