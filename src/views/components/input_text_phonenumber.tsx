import { ChangeEvent, InputHTMLAttributes, memo, ReactElement, useCallback } from "react";
import { Iran } from "../../assets";
import { Divider } from "./components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    valueCode: string | number;
    valuephone: string;
    title: string;
    onChangeCode(event: ChangeEvent<HTMLInputElement>): void;
    onChangePhone(event: ChangeEvent<HTMLInputElement>): void;
}

export function InputTextPhoneNumber({
    valueCode,
    valuephone,
    title,
    onChangeCode,
    onChangePhone
}: Props): ReactElement {

    return (
        <div className="input-text-phonenumber">
            <div className="input-text-phonenumber-title">
                <h6 className="input-text-phonenumber-title-text">
                    {title}
                </h6>
            </div>
            <div className="input-text-phonenumber-inputs">
                <input
                    type="number"
                    value={valueCode}
                    className="input-text-phonenumber-inputs-code"
                    onChange={onChangeCode}
                />
                <img src={Iran} className="icon-flag" />
                <div className="divider">
                </div>
                <input
                    type="number"
                    value={valuephone}
                    onChange={onChangePhone}
                    className="input-text-phonenumber-inputs-phone"
                />
            </div>
        </div>
    )
}
export default memo(InputTextPhoneNumber);