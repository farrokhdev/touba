import {
    memo,
    ReactElement,
    useCallback,
    MouseEvent,
    ButtonHTMLAttributes
} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    notification?: number;
    icon: string;
}

export function ButtonIconDashboard({ onClick, notification, icon }: Props): ReactElement {

    const handleOnClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClick?.(event);
    }, [onClick]);

    return (
        <>
            <div className="section-two">
                <button
                    className="button-icon-two"
                    onClick={handleOnClick}
                >
                    <img src={icon} alt="" className="icon" />
                </button>
                {notification !== undefined ? (
                    <span>
                        <span>
                            {notification}
                        </span>
                    </span>
                ) : (null)}
            </div>
        </>
    )
}

export default memo(ButtonIconDashboard);