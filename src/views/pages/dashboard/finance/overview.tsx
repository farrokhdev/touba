import ActivityChart from "../../../components/activity_chart";
import { ChartDoughnut } from "../../../components/chart_doughnut";
import { SummaryDashboard } from "../../../components/components";
import ComponentLineChart from "../../../components/component_line_chart";
import { TableTransaction } from "../../../components/table_transactions";
import FinanceController from "../../../controllers/finance_controller";


export default class Overview extends FinanceController {
    render() {
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
}
