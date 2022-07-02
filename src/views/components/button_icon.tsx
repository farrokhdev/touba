import {
    memo,
    ReactElement,
    useCallback,
    MouseEvent,
    ButtonHTMLAttributes
} from "react";

interface Props {
    icon: string;
    nameButton: string;
    onClick?(): void;
}

export function ButtonIcon({ onClick, icon, nameButton }: Props): ReactElement {

    return (
        <>
            {
                nameButton === "" || nameButton.trim() === " " ? (
                    <button
                        className="button-icon"
                        onClick={() => onClick}
                        type="button"
                    >
                        <img src={icon} alt="" className="icon" />
                    </button>
                ) : (
                    <button
                        className="button-icon-title"
                        onClick={() => onClick}
                        type="button"
                    >
                        <img src={icon} alt="" className="icon" />
                        <h5 className="button-icon-title-text">
                            {nameButton}
                        </h5>
                    </button>
                )
            }
        </>
    )
}

export default memo(ButtonIcon);