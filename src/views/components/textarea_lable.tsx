import { HTMLAttributes, memo, ReactElement, useCallback, MouseEvent, ChangeEvent, useState } from "react";
import { IconArrowGreen, IconArrowWhite } from "../../assets";

interface Props extends HTMLAttributes<HTMLElement> {
    title: string;
    handleGetValue(text: string): void;
}

export function TextAreaLabel({ title, handleGetValue }: Props): ReactElement {

    function handleGetText (event: ChangeEvent<HTMLTextAreaElement>) {
        handleGetValue(event.currentTarget.value);
    };

    return (
        <div className="textarea-lable">
            <div className="textarea-lable-title">
                <h6 className="textarea-lable-title-text">
                    {title}
                </h6>
            </div>
           <textarea className="textarea-lable-input" onChange={handleGetText}>

           </textarea>
        </div>
    )
}
export default memo(TextAreaLabel);