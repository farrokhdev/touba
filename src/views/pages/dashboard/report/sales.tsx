import { ImageWorld, Iran, IconDownload, IconDownloadWhite } from "../../../../assets";
import Divider from "../../../components/divider";
import ReportController from "../../../controllers/report_controller";


class Sales extends ReportController {
    render() {
        return (
            <>
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
            </>
        )
    }
}

export default Sales;