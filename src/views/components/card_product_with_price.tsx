import { memo, ReactElement } from "react";
// import { default as IconSharpSign } from './../public/assets/icons/icon-sharp-sign.svg';

interface Props {
    image: any;
    title: string;
    fromPrice: number;
    toPrice: number;
}

export function CardProductWithPrice({ image, title, fromPrice, toPrice }: Props): ReactElement {

    return (
        <div className="card-product-with-price">
            <div className="card-product-with-price-section-top">
                <img src={image} className="card-product-with-price-section-top-image" />
            </div>
            <div className="card-product-with-price-context">
                <h3 className="card-product-with-price-content-title">
                    {title}
                </h3>
                <h6 className="card-product-with-price-content-form-price">
                    From ${fromPrice}
                </h6>
                <div className="card-product-with-price-content-to-price">
                    <img
                        src={''}
                        className="card-product-with-price-content-to-price-icon"
                    />
                    <h6 className="card-product-with-price-content-to-price-text">
                        Min Order: {toPrice}
                    </h6>
                </div>

            </div>
        </div>
    )
}

export default memo(CardProductWithPrice);