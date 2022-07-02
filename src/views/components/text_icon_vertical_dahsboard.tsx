import { HTMLAttributes, memo, ReactElement, useCallback, MouseEvent } from "react";
import { IconArrowGreen, IconArrowWhite } from "../../assets";

interface Props {
    icon: string;
    title: string;
}

function TextIconVerticalDashboard({ icon, title }: Props): ReactElement {

    return (
        <div className="text-icon-vertical-dshboard">
            <img src={icon} alt="" />
            <h6 className="text-icon-vertical-dshboard-title">
                {title}
            </h6>
        </div>
    )
}
export default memo(TextIconVerticalDashboard);