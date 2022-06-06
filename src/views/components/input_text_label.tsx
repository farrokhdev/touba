import { ChangeEvent, InputHTMLAttributes, memo, ReactElement, useCallback } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
}

export function InputTextLabel({ value, onChange }: Props): ReactElement {

    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event)
    }, [onChange]);

    return (
        <div className="input-text-label">
            <div className="input-text-label-title">
                <h6 className="input-text-label-title-text">
                    Product or Service
                </h6>
            </div>
            <input
                type="text"
                placeholder="What product you want to produce? Eg. PET Bottle"
                value={value}
                onChange={handleOnChange}
                className="input-text-label-input"
            />
            {value === "" ? (null) : (
                <div className="input-text-label-dropdown">

                </div>
            )}
        </div>
    )
}
export default memo(InputTextLabel);