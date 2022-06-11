import { HTMLAttributes, memo, ReactElement, useCallback, MouseEvent } from "react";
import { IconArrowGreen, IconArrowWhite } from "../../assets";

interface Props extends HTMLAttributes<HTMLElement> {
    icon: string;
    title: string;
    showArrow: boolean;
    active: boolean;
}

function TextIconHorizontal({ icon, title, showArrow, active, onClick }: Props): ReactElement {

    const handleOnClick = useCallback((event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        onClick?.(event);
    }, [onClick]);

    return (
        <div
            className={
                active === true ?
                    "text-icon-horizontal active"
                    :
                    "text-icon-horizontal"}
            onClick={handleOnClick}
        >
            <h6 className="text-icon-horizontal-title">
                <img
                    src={icon}
                    className="text-icon-horizontal-title-icon"
                />
                {title}
            </h6>
            {showArrow === true ? (
                active === true ? (
                    <div className="text-icon-horizontal-background">
                        <img
                            src={IconArrowWhite}
                            className="text-icon-horizontal-background-icon"
                        />
                    </div>
                ) : (
                    <img
                        src={IconArrowGreen}
                        className="text-icon-horizontal-icon"
                    />
                )
            ) : (null)
            }
        </div >
    )
}
export default memo(TextIconHorizontal);