import { memo, ReactElement} from "react";
import Chart, { CHART } from "./chart";

interface Props {
    image: string;
    title: string;
}

export function CardNewProduct({image, title}: Props): ReactElement {

    return (
        <div className="card-new-product">
            <div className="card-new-product-image">
                <img src={image} />
            </div>
            <h5 className="card-new-product-title">
                {title}
            </h5>
        </div>
    )
}

export default memo(CardNewProduct);