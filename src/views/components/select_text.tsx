import { ChangeEvent, InputHTMLAttributes, memo, ReactElement, useCallback } from "react";
import { SelectComponent } from "./components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    placeholderSelect?: string;
}

function SelectText({ value, onChange, placeholderSelect }: Props): ReactElement {

    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event)
    }, [onChange]);

    return (
        <div className="select-text">
            <input
                type="text"
                placeholder="Enter Quantity"
                className="select-text-input-text"
                value={value}
                onChange={handleOnChange}
            />
            <div className="select-text-divider">
            </div>
            <SelectComponent type={"two"} placeholder={placeholderSelect}/>
        </div>
    )
}
export default memo(SelectText);