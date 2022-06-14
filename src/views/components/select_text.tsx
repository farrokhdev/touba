import { ChangeEvent, InputHTMLAttributes, memo, ReactElement, useCallback, useState } from "react";
import { SelectComponent } from "./components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    placeholderSelect?: string;
    onSelected(select: string): void;
}

function SelectText({ value, onChange, placeholderSelect, onSelected }: Props): ReactElement {

    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event)
    }, [onChange]);

    const handleGetSelected = useCallback((name: string) => {
        onSelected(name);
    }, [onSelected]);

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
            <SelectComponent
                type={"two"}
                placeholder={placeholderSelect}
                onSelect={handleGetSelected}
            />
        </div>
    )
}
export default memo(SelectText);