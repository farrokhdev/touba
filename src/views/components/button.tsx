import {
    memo,
    ReactElement,
    useCallback,
    MouseEvent,
    ButtonHTMLAttributes
} from "react";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    ClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void}


export function ButtonComponent({ ClickHandler, title }:  Props): ReactElement {
    

    // const handleOnClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    //     event.stopPropagation();
    //     onClick?.(event);
    // }, [onClick]);

    return (
        <button
            className="button-component"
           onClick={ClickHandler}
        >
            <h3 className="button-component-text">
                {title}
            </h3>
        </button>
    )
}

export default memo(ButtonComponent);