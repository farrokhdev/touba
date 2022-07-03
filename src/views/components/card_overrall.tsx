import { memo, ReactElement } from "react";
import { IconShop } from "../../assets";
import { Divider } from "./components";

interface Props {
    image: string;
    type: string;
    amountSold: number;
    amountBought: number;
}

export function CardOverall({
    image,
    type,
    amountBought,
    amountSold
}: Props): ReactElement {

    return (
        <div className="card-overall">
            <div className="card-overall-image">
                <img src={image} alt="" />
            </div>
            <div className="card-overall-content">
                <h5 className="card-overall-content-title">
                    {type}
                </h5>
                <div className="card-overall-content-status">
                    <h6 className="card-overall-content-status-sold">
                        Sold:
                        <span>
                            $ {amountSold}
                        </span>
                    </h6>
                    <div style={{ height: "100%" }}>
                        <Divider direction={"horizontal"} />
                    </div>
                    <h6 className="card-overall-content-status-bought">
                        Bought:
                        <span>
                            $ {amountBought}
                        </span>
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default memo(CardOverall);