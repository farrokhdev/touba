import { memo, ReactElement} from "react";

interface Props {
    image: any;
    discountPercent: number;
}

export function CardBestSeller({image, discountPercent}: Props): ReactElement {

    return (
        <div className="card-best-seller">
           <img src={image} className="card-best-seller-image"/>
           <div className="card-best-seller-discount-percent">
                <p className="card-best-seller-discount-percent-amount">
                    $ {discountPercent}
                </p>
           </div>
        </div>
    )
}

export default memo(CardBestSeller);