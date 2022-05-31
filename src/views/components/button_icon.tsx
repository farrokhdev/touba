import {
    memo,
    ReactElement,
    useCallback,
    MouseEvent,
    ButtonHTMLAttributes
} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string;
}

export function ButtonIcon({ onClick, icon }: Props): ReactElement {

    const handleOnClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClick?.(event);
    }, [onClick]);

    return (
        <button
            className="button-icon"
            onClick={handleOnClick}
        >
            <img src={icon} alt="" className="icon"/>
        </button>
    )
}

export default memo(ButtonIcon);