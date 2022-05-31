import { memo, ReactElement } from "react";
import { IconHeart, ImageTest } from "../../assets";
// import { default as IconHeart } from "./../public/assets/icons/icon-heart.svg";
// import { default as ImageTest } from "./../public/assets/images/image-test.png";

export function CardProduct(): ReactElement {
    return (
        <div className="card-product">
            <div className="card-product-image">
                <img src={ImageTest}/>
            </div>
            <div className="card-product-content">
                <div className="card-product-content-header">
                    <h6 className="card-product-content-header-text">
                        Finish Product
                    </h6>
                    <img src={IconHeart} className="card-product-content-header-icon"/>
                </div>
                <div className="card-product-content-title">
                    <h2 className="card-product-content-title-text">
                        Pomegranate Juice Pet Bottle...
                    </h2>
                </div>
                <div className="card-product-content-description">
                    <span className="card-product-content-description-text">
                        Overall Capacity:
                    </span>
                    <span className="card-product-content-description-text">
                        200Tons/Monthly
                    </span>
                </div>
                <div className="card-product-content-chart">

                </div>
            </div>
        </div>
    )
}
export default memo(CardProduct);