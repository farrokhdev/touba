import { memo, ReactElement } from "react";
import { IconArrow } from "../../assets";
// import { default as IconArrow } from "../public/assets/icons/icon-arrow.svg";

interface Props {
    type: "one" | "two";
}

export function SelectComponent({ type }: Props): ReactElement {
    return (
        <div className="select-component">
            <button className="select-component-button">
                {type === "one" ? (
                    <img
                        src={IconArrow}
                        className="select-component-button-icon"
                    />
                ) : (null)}

                <h3 className="select-component-button-text">
                    Regional Channel
                </h3>
                {type === "two" ? (
                    <img
                        src={IconArrow}
                        className="select-component-button-icon"
                    />
                ) : (null)}
            </button>
        </div>
    )
}
export default memo(SelectComponent);