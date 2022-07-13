import { ImageOil } from "../../../../assets";
import ComponentLineChart from "../../../components/component_line_chart";
import Divider from "../../../components/divider";
import ReportController from "../../../controllers/report_controller";


class SummaryPage extends ReportController {
  render() {
    return (
      <>
        <div className="report-summary-insights">
          <h5 className="report-summary-insights-title">Insights</h5>
          <Divider direction={"vertical"} />
          <div className="report-summary-insights-details">
            <div className="report-summary-insights-details-text">
              <h6>21,214</h6>
              <p>Last Week</p>
            </div>
            <Divider direction={"horizontal"} />
            <div className="report-summary-insights-details-text">
              <h6>21,214</h6>
              <p>Last Week</p>
            </div>
            <Divider direction={"horizontal"} />
            <div className="report-summary-insights-details-text">
              <h6>21,214</h6>
              <p>Last Week</p>
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
                Pomegranate Juice Pet Bottle, Best material and design, Ready to
                Order
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
                Pomegranate Juice Pet Bottle, Best material and design, Ready to
                Order
              </p>
            </div>
          </div>
        </div>
        <div className="report-summary-chart">
          <ComponentLineChart />
        </div>
      </>
    );
  }
}

export default SummaryPage;
