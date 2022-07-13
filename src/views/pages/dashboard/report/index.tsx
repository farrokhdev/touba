import { ImageBox, ImageChat, ImageShop, ImageTwoUser, ImageWallet } from "../../../../assets";
import DashboardNav from "../../../components/dashboard_nav";
import ReportController from "../../../controllers/report_controller";
import Sales from "./sales";
import Statistics from "./statistics";
import SummaryPage from "./summary";
import Summary from "./../../../components/summary";

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