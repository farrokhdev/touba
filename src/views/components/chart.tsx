import {
    memo,
    ReactElement,
    useCallback,

} from "react";

export type CHART = {
    name: string;
    size: number;
}

interface Props {
    item: CHART[];
}

export function Chart({ item }: Props): ReactElement {

    return (
        <div className="chart">
            {item.map((name, index) => (
                <div className="chart-content" key={index}>
                    <div className="chart-content-column">
                        <div className="chart-content-column-bottom"></div>
                        <div
                            className="chart-content-column-top"
                            style={{ height: `${name.size}%` }}>
                        </div>
                    </div>
                    <h4 className="chart-content-text">{name.name}</h4>
                </div>
            ))}
        </div>
    )
}

export default memo(Chart);