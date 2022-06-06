import { memo, ReactElement} from "react";
import Chart, { CHART } from "./chart";

interface Props {
    image: string;
    items: CHART[];
    title: string;
}

export function CardNewExcess({image, items, title}: Props): ReactElement {

    return (
        <div className="card-new-excess">
            <img src={image} className="card-new-excess-image"/>
            <div className="card-new-excess-content">
                <h3 className="card-new-excess-content-text">
                    {title}
                </h3>
                <div className="card-new-excess-content-chart">
                    <Chart item={items} />
                </div>
            </div>
        </div>
    )
}

export default memo(CardNewExcess);