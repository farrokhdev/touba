import { ChangeEvent, InputHTMLAttributes, memo, ReactElement, useCallback, useEffect, useState } from "react";
import { Iran } from "../../assets";
import { Divider } from "./components";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface Props {
    getPhoneNumber(value: string): void;
    title: string;
    
}

export function InputTextPhoneNumber({
    title,
    getPhoneNumber
}: Props): ReactElement {

    const [phone, setPhone] = useState<any>();

    useEffect(() => {
        getPhoneNumber(phone);
    }, [getPhoneNumber, phone]);

    return (
        <div className="input-text-phonenumber">
            <div className="input-text-phonenumber-title">
                <h6 className="input-text-phonenumber-title-text">
                    {title}
                </h6>
            </div>
            <div className="input-text-phonenumber-inputs">
                <PhoneInput
                    country={'ir'}
                    value={phone}
                    onChange={phone => setPhone(phone)}
                />
            </div>
        </div>

    )
}
export default memo(InputTextPhoneNumber);