import { HTMLAttributes, memo, ReactElement, useCallback, MouseEvent } from "react";
import { IconArrowGreen, IconArrowWhite } from "../../assets";

interface Props extends HTMLAttributes<HTMLElement> {
    icon: string;
    title: string;
    showArrow: boolean;
    active: boolean;
}

function TextIconVertical({ icon, title, showArrow, active, onClick }: Props): ReactElement {

    const handleOnClick = useCallback((event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        onClick?.(event);
    }, [onClick]);

    return (
        <div
            className={
                active === true ?
                    "text-icon-vertical active"
                    :
                    "text-icon-vertical"}
            onClick={handleOnClick}
        >
            <h6 className="text-icon-vertical-title">
                <img
                    src={icon}
                    className="text-icon-vertical-title-icon"
                />
                {title}
            </h6>
            {showArrow === true ? (
                active === true ? (
                    <div className="text-icon-vertical-background">
                        <img
                            src={IconArrowWhite}
                            className="text-icon-vertical-background-icon"
                        />
                    </div>
                ) : (
                    <img
                        src={IconArrowGreen}
                        className="text-icon-vertical-icon"
                    />
                )
            ) : (null)
            }
        </div >
    )
}
export default memo(TextIconVertical);