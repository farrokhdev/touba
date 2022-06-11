import { ChangeEvent, InputHTMLAttributes, memo, ReactElement, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import Button from "./button";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    amount: number;
    value: number;
}

export function CardCalculate({ amount, value, onChange }: Props): ReactElement {

    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event)
    }, [onChange]);

    return (
        <div className="card-calculate">
            <input
                type="text"
                placeholder="Enter Quantity"
                className="card-calculate-input"
                value={value}
                onChange={handleOnChange}
            />
            <p className="card-calculate-multiplication">+</p>
            <p className="card-calculate-amount"> $ {amount} </p>
            <p className="card-calculate-equal"> = </p>
            <p className="card-calculate-value">${value * amount}</p>
            <Button title={"ADD TO CART"} />
        </div>
    )
}

export default memo(CardCalculate);