import {
    memo,
    ReactElement,
    useCallback,
    MouseEvent,
    ButtonHTMLAttributes
} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export function ButtonComponent({ onClick, title }: Props): ReactElement {

    const handleOnClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClick?.(event);
    }, [onClick]);

    return (
        <button
            className="button-component "
            onClick={handleOnClick}
        >
            <h3 className="button-component-text">
                {title}
            </h3>
        </button>
    )
}

export default memo(ButtonComponent);