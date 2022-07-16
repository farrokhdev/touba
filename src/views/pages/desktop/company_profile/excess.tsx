import { Chart } from "./../../../components/chart";
import { ImageTest } from "../../../../assets";
import { CardOfferHorizontal } from "../../../components/cars_offer_horizontal";
import { ComponentFilterSidebar, ComponentFilterRangeSlider, ComponentCapicityFilter } from "../../../components/components";
import CompanyProfileController from "../../../controllers/company_profile_controller";

export default class Excess extends CompanyProfileController {
    render() {
        const {
            showChartModal,
        } = this.state;
        return (
            <div>
                <div className=" px-4">
                    <div className="row p-3     ">
                        <div className="col-3">
                            <ComponentFilterSidebar showButton={false} />
                        </div>
                        <div className="col-9">
                            <div className="p-2">
                                <ComponentFilterRangeSlider />
                            </div>
                            <div className="p-2 expess-select d-flex flex-row align-items-center justify-content-between">
                                <span>4 Products</span>
                                <select>
                                    <option>Most Relative</option>
                                </select>
                            </div>
                            <div className="p-2">
                                <ComponentCapicityFilter />
                            </div>
                            <div className="p-2">
                                <CardOfferHorizontal
                                    image={ImageTest}
                                    status={"exp"}
                                    description={
                                        "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                                    }
                                    rate={4}
                                    country={"chin"}
                                    chart={this.TEST}
                                    amount={5}
                                    discountPercent={2}
                                    chartOnClick={() => this.setState({ showChartModal: true })}
                                />
                            </div>
                            <div className="p-2">
                                <CardOfferHorizontal
                                    image={ImageTest}
                                    status={"exp"}
                                    description={
                                        "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                                    }
                                    rate={4}
                                    country={"chin"}
                                    chart={this.TEST}
                                    amount={5}
                                    discountPercent={2}
                                    chartOnClick={() => this.setState({ showChartModal: true })}
                                />
                            </div>
                            <div className="p-2">
                                <CardOfferHorizontal
                                    image={ImageTest}
                                    status={"exp"}
                                    description={
                                        "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                                    }
                                    rate={4}
                                    country={"chin"}
                                    chart={this.TEST}
                                    amount={5}
                                    discountPercent={2}
                                    chartOnClick={() => this.setState({ showChartModal: true })}
                                />
                            </div>
                            <div className="p-2">
                                <CardOfferHorizontal
                                    image={ImageTest}
                                    status={"exp"}
                                    description={
                                        "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                                    }
                                    rate={4}
                                    country={"chin"}
                                    chart={this.TEST}
                                    amount={5}
                                    discountPercent={2}
                                    chartOnClick={() => this.setState({ showChartModal: true })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {showChartModal ? (
                    <div
                        className="modal-company"
                        onClick={() => this.setState({ showChartModal: false })}
                    >
                        <div
                            onClick={this.handlePreventOnClick}
                            className="excess-modal p-4 d-flex flex-column align-items-start justify-content-between"
                        >
                            <div className="px-4 gray-background d-flex flex-column align-items-center justify-content-around">
                                <span>
                                    a Quick motiongraphy to help user undrestanding this diagram
                                </span>
                                <Chart item={this.TEST} />
                            </div>
                            <button
                                className="green-btn"
                                onClick={() => this.setState({ showChartModal: false })}
                            >
                                Got it
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    };
}
