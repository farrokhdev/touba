import { memo, ReactElement } from "react";
import { IconQuestionMark, IconSharpSign, ImageJuicer } from "../../assets";
import { ButtonOutline } from "./button_outline";
import { CHART } from "./chart";
import { Chart, Rate } from "./components";
import { Divider } from "./divider";

interface Props {

}

const TEST: CHART[] = [
    { name: "JAN", size: 20 },
    { name: "FEB", size: 30 },
    { name: "MAR", size: 40 },
    { name: "APR", size: 50 },
    { name: "MAY", size: 60 },
    { name: "JUN", size: 70 },
    { name: "JUL", size: 80 },
    { name: "AUG", size: 90 },
    { name: "SEP", size: 100 },
    { name: "OCT", size: 20 },
    { name: "NOV", size: 20 },
    { name: "DEC", size: 20 },
];

export function CardProductGroupTitle({ }: Props): ReactElement {

    return (
        <div className="card-product-group-title">
            <div className="card-product-group-title-header">
                <div className="name">
                    <h5 className="user-name">
                        User Name
                    </h5>
                    <h5 className="status">
                        Updated an
                    </h5>
                    <h5 className="product">
                        Excess Capacity
                    </h5>
                </div>
                <h6 className="title">
                    Group Title
                </h6>
            </div>
            <div className="card-product-group-title-content">
                <div className="card-product-group-title-content-header">
                    <img src={ImageJuicer} alt="" />
                    <div className="description">
                        <div className="description-title">
                            <h5>
                                Pomegranate Juice Pet Bottle, Best material and design, Ready to Order
                            </h5>
                        </div>
                        <div className="description-rate">
                            <Rate rate={4} numOfRaiting={`(${4.2}${"  "}|${"  "}${12.514} Rating)  ${"  "}|${"  "} ${988} Customer Reviews`} />
                        </div>
                    </div>
                </div>
                <Divider direction={"vertical"} />
                <div className="card-product-group-title-content-body">
                    <div className="card-product-group-title-content-body-header">
                        <h5 className="card-product-group-title-content-body-header-title">
                            overall Capacity:
                            <span>
                                200Tons/Monthly
                            </span>
                        </h5>
                        <img src={IconQuestionMark} alt="" />
                    </div>
                    <div className="card-product-group-title-content-body-chart">
                        <Chart item={TEST} />
                    </div>
                </div>
                <Divider direction={"vertical"} />
                <div className="card-product-group-title-content-footer">
                    <div className="card-product-group-title-content-footer-price">
                        <div>
                            <h5>
                                $5.00
                            </h5>
                            <h6>
                                {">"}10,000 Piece
                            </h6>
                        </div>
                        <div>
                            <h5>
                                $4.00
                            </h5>
                            <h6>
                                10,000-20,000
                            </h6>
                        </div>
                        <div>
                            <h5>
                                $3.20
                            </h5>
                            <h6>
                                {"<"}20,000
                            </h6>
                        </div>
                    </div>
                    <ButtonOutline title={"VIEW DETAILS"}/>
                </div>
            </div>
        </div>
    )
}

export default memo(CardProductGroupTitle);