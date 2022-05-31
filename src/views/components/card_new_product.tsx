import { memo, ReactElement} from "react";
import { Chart } from "./chart";

interface Props {
    image: string;
    items: Chart[];
    title: string;
}

export function CardNewProduct({image, items, title}: Props): ReactElement {

    return (
        <div className="card-new-product">
            <img src={image} className="card-new-product-image"/>
            <div className="card-new-product-content">
                <h3 className="card-new-product-content-text">
                    {title}
                </h3>
                <div className="card-new-product-content-chart">
                    <Chart item={items} />
                </div>
            </div>
        </div>
    )
}

export default memo(CardNewProduct);