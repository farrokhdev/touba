import { memo, ReactElement } from "react";
import { IconArrow, IconGem, IconHeart, IconQuestionMark, IconStar, ImageBrandDisacount, ImageTest } from "../../assets";
import { CHART } from "./chart";
import { Chart } from "./components";

const TEST = [
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
]

interface Props {
    image: string;
    status: string;
    description: string;
    rate: number;
    country: string;
    chart: CHART[];
    amount: number;
    discountPercent: number;
}

export function CardOfferHorizontal({
    image,
    status,
    description,
    rate,
    country,
    chart,
    amount,
    discountPercent
}: Props): ReactElement {
    return (
        <div className="card-offer-horizontal">
            <div className="card-offer-horizontal-image">
                <img src={image} alt="" className="card-offer-horizontal-image-image" />
            </div>
            <div className="card-offer-horizontal-content">
                <h6 className="card-offer-horizontal-content-title">
                    {status}
                </h6>
                <h4 className="card-offer-horizontal-content-description">
                    {description}
                </h4>
                <div className="card-offer-horizontal-content-item">
                    <div className="card-offer-horizontal-content-item-description">
                        <p className="card-offer-horizontal-content-item-description-text">
                            Quanzhou Laren Trading Co., Ltd.
                        </p>
                        <p className="card-offer-horizontal-content-item-description-rate">
                            (
                            <img src={IconStar} alt="" />
                            {rate} )
                        </p>
                    </div>
                    <button className="card-offer-horizontal-content-item-button">
                        <img src={IconGem} alt="" />
                        <p className="card-offer-horizontal-content-item-button-text">
                            Diamond
                        </p>
                    </button>
                </div>
                <p className="card-offer-horizontal-content-country">
                    {country}
                </p>
            </div>
            <div className="card-offer-horizontal-divider">
            </div>
            <div className="card-offer-horizontal-chart">
                <div className="card-offer-horizontal-chart-content">
                    <div className="card-offer-horizontal-chart-content-header">
                        <h5 className="card-offer-horizontal-chart-content-header-text">
                            Overall Capacity:  {amount}Tons/Monthly
                        </h5>
                        <img
                            src={IconQuestionMark}
                            className="card-offer-horizontal-chart-content-header-icon"
                        />
                    </div>
                    <Chart item={chart} />
                </div>
                <div className="card-offer-horizontal-chart-button">
                    
                    <div className="card-offer-horizontal-chart-button-discount">
                        <img
                            src={ImageBrandDisacount}
                            className="card-offer-horizontal-chart-button-discount-background"
                        />
                        <p className="card-offer-horizontal-chart-button-discount-percent">
                            {discountPercent}%
                        </p>
                    </div>
                    <button>
                        <img src={IconArrow} />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default memo(CardOfferHorizontal);