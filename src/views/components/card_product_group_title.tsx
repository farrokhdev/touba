import { memo, ReactElement, useState } from "react";
import { IconQuestionMark, IconSharpSign, IconWolf, ImageJuicer } from "../../assets";
import { ButtonOutline } from "./button_outline";
import { CHART } from "./chart";
import { Chart, Rate } from "./components";
import { Divider } from "./divider";



type Card = {
    icon: string;
    userName: string;
    status: string;
    type: string;
    image: string;
    description: string;
    rate: number;
    chart: CHART[];
    amount: number;
    price1: number;
    price2: number;
    price3: number;
    time: string;
}

interface Props {
    items: Card;
}

export function CardProductGroupTitle({ items }: Props): ReactElement {

    const [showDetails, setShowDetails] = useState(false);

    function showMoreDetails () {
        setShowDetails(!showDetails);
    }

    return (
        <div className="card-product-group-title">
            <div className="card-product-group-title-icon">
                <div className="card-product-group-title-icon-image">
                    <img src={items.icon} alt="" />
                </div>
            </div>
            <div className="card-product-group-title-chat">
                <div className="card-product-group-title-chat-header">
                    <div className="name">
                        <h5 className="user-name">
                            {items.userName}
                        </h5>
                        <h5 className="status">
                            {items.status}
                        </h5>
                        <h5 className="product">
                            {items.type}
                        </h5>
                    </div>
                    <h6 className="title-chat">
                        Group Title
                    </h6>
                </div>
                <div className="card-product-group-title-chat-content">
                    <div className="card-product-group-title-chat-content-header">
                        <img src={items.image} alt="" />
                        <div className="description">
                            <div className="description-title-chat">
                                <h5>
                                    {items.description}
                                </h5>
                            </div>
                            <div className="description-rate">
                                <Rate rate={4} numOfRaiting={`(${items.rate}${"  "}|${"  "}${12.514} Rating)  ${"  "}|${"  "} ${988} Customer Reviews`} />
                            </div>
                        </div>
                    </div>
                    <Divider direction={"vertical"} />
                    {showDetails === true ? (
                        <div className="card-product-group-title-chat-content-body">
                            <div className="card-product-group-title-chat-content-body-header">
                                <h5 className="card-product-group-title-chat-content-body-header-title-chat">
                                    overall Capacity:
                                    <span>
                                        {items.amount}Tons/Monthly
                                    </span>
                                </h5>
                                <img src={IconQuestionMark} alt="" />
                            </div>
                            <div className="card-product-group-title-chat-content-body-chart">
                                <Chart item={items.chart} />
                            </div>
                        </div>
                    ) : (null)}
                    <Divider direction={"vertical"} />
                    <div className="card-product-group-title-chat-content-footer">
                        <div className="card-product-group-title-chat-content-footer-price">
                            <div>
                                <h5>
                                    ${items.price1}
                                </h5>
                                <h6>
                                    {">"}10,000 Piece
                                </h6>
                            </div>
                            <div>
                                <h5>
                                    ${items.price2}
                                </h5>
                                <h6>
                                    10,000-20,000
                                </h6>
                            </div>
                            <div>
                                <h5>
                                    ${items.price3}
                                </h5>
                                <h6>
                                    {"<"}20,000
                                </h6>
                            </div>
                        </div>
                        <ButtonOutline title={"view details"} onClick={showMoreDetails}/>
                    </div>
                </div>
                <div className="card-product-group-title-chat-footer">
                    <h6 className="card-product-group-title-chat-footer-time">
                        {items.time}
                    </h6>
                </div>
            </div>
        </div>

    )
}

export default memo(CardProductGroupTitle);