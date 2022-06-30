import {
    memo,
    ReactElement,
} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    dataChart: string[];
}

export function ChartDoughnut({ dataChart }: Props): ReactElement {
    const data = {
        datasets: [
            {
                data: dataChart,
                backgroundColor: [
                    '#21C085',
                    '#FC4A56',
                ],
                borderColor: [
                    '#21C085',
                    '#FC4A56',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className="chart-doughnut">
            <div className="chart-doughnut-chart">
                <Doughnut data={data} />
            </div>
            <div className="chart-doughnut-content">
                <div className="chart-doughnut-content-green">
                    <span></span>
                    <div className="chart-doughnut-content-green-text">
                        <h6>
                            Excess Capacity
                        </h6>
                        <h5>
                            ${`${dataChart[0]}`}
                        </h5>
                    </div>
                </div>
                <div className="chart-doughnut-content-red">
                    <span></span>
                    <div className="chart-doughnut-content-red-text">
                        <h6>
                            Products
                        </h6>
                        <h5>
                            ${`${dataChart[1]}`}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ChartDoughnut);