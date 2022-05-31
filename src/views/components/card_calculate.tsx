import { memo, ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import Button from "./button";

interface Props {
    amount: number;
    value: number;
}

export function CardCalculate({amount, value}: Props): ReactElement {

    return (
        <div className="card-calculate">
            <input 
                type="text" 
                placeholder="Enter Quantity" 
                className="card-calculate-input"
                value={value}
                />
            <p className="card-calculate-multiplication">+</p>
            <p className="card-calculate-amount"> $ {amount} </p>
            <p className="card-calculate-equal"> = </p>
            <p className="card-calculate-value">${ value * amount}</p>
            <Button title={"ADD TO CART"} />
        </div>
    )
}

export default memo(CardCalculate);