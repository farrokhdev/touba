import { ReactElement, memo } from "react";

interface Props {
    direction: "horizontal" | "vertical";
}

export function Divider({direction}: Props): ReactElement {

    return (
        <div className={direction === "vertical"  ? (
            "hr"
        ) : (
            "hr-horizontal"
        )}>

        </div>
    )
}
export default memo(Divider);