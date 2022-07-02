import {
    memo,
    ReactElement,
    useCallback,

} from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

interface Props {

}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
};

const labels = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];

export const data = {
    labels,
    datasets: [{
        label: "hide",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: '#E63946',
    }],
   
};

export function ChartSale({ }: Props): ReactElement {

    return (
        <div className="chart-sale">
            <h6 className="chart-sale-title">
                Last Week Sales:
            </h6>
            <h4 className="chart-sale-day">
                Sat:
                <span>
                    $120,524
                </span>
            </h4>
            <div className="chart-sale-week">
                <Line options={options} data={data} />
            </div>
        </div>
    )
}

export default memo(ChartSale);