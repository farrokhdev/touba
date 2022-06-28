import { ChangeEvent, InputHTMLAttributes, memo, ReactElement, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import Button from "./button";
import { IconClose, ImageTest } from "../../assets";

interface Props {
    image: string;
    name: string;
    price: number;
    number: number;
}

export function CardCalculateProduct({ image, name, price, number}: Props): ReactElement {

    return (
        <div className="card-calculate-product row px-3">
            <div className="section-image col-6">
                <div className="col-3">
                    <img src={ImageTest} className="image" />
                </div>
                <div className="col-9">
                    <h6 className="product-name">
                        Product Name Here
                        <span>
                            {name}
                        </span>
                    </h6>
                    <h5 className="product-price">
                        ${price}
                        <span>
                            per Piece
                        </span>
                    </h5>
                </div>
            </div>
            <div className="section-multiple col-3">
                <img src={IconClose} className="multiple" />
                <span>{number}</span>
            </div>
            <div className="section-total col-3">
                <h4 className="total-price">
                    $<span>
                        {price * number}
                    </span>
                </h4>
            </div>
        </div>
    )
}

export default memo(CardCalculateProduct);