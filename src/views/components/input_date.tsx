import { ChangeEvent, InputHTMLAttributes, memo, ReactElement, useCallback } from "react";

interface Props {
    title: string;
    handleGetValue(value: string): void
}

export function InputDate({ title, handleGetValue}: Props): ReactElement {

    function handleGetValueDate (event: ChangeEvent<HTMLInputElement>) {
        handleGetValue(event.currentTarget.value);
    }

    return (
        <div className="input-date">
            <div className="input-date-title">
                <h6 className="input-date-title-text">
                    {title}
                </h6>
            </div>
            <div className="input-date-input">
                <input
                    className="input"
                    type="date"
                    name="selected_date"
                    onChange={handleGetValueDate}
                />
            </div>
        </div>
    )
}
export default memo(InputDate);