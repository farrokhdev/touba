import {
    memo,
    ReactElement,
    useCallback,
    MouseEvent,
    ButtonHTMLAttributes
} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string;
    nameButton: string;
}

export function ButtonIcon({ onClick, icon, nameButton }: Props): ReactElement {

    const handleOnClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClick?.(event);
    }, [onClick]);

    return (
        <>
            {
                nameButton === "" || nameButton.trim() === " " ? (
                    <button
                        className="button-icon"
                        // onClick={handleOnClick}
                    >
                        <img src={icon} alt="" className="icon" />
                    </button>
                ) : (
                    <button
                        className="button-icon-title"
                        // onClick={handleOnClick}
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