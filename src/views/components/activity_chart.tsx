import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

interface IProps {
  datalist1: any[];
  datalist2: any[];
}
export default function ActivityChart({ datalist1, datalist2 }: IProps) {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend);
  const plugin = {
    id: "custom_canvas_background_color",
    beforeDraw: (chart: any) => {
      const ctx = chart.canvas.getContext("2d");
      ctx.save();
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    },
  };
  const labels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Excess Capacity",
        data: datalist1.map((i) => i),
        backgroundColor: "#21C085",
      },
      {
        label: "Products",
        data: datalist2.map((i) => i),
        backgroundColor: "#FC4A56",
      },
    ],
  };
  const options = {
    responsive: true,
    Tooltip: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  const [isActive, setActive] = useState(1);
  return (
    <div className="activity-chart">
      <div className="chart-head d-flex flex-row align-items-center justify-content-between">
        <span className="mb-4">Last 12 Month Activity</span>
        <div className="chart-btn d-flex flex-row align-items-center ">
          <button
            className={isActive === 1 ? "active-btn" : ""}
            onClick={() => setActive(1)}
          >
            Sales
          </button>
          <button
            className={isActive === 2 ? "active-btn" : ""}
            onClick={() => setActive(2)}
          >
            Purchase
          </button>
        </div>
      </div>
      <Bar options={options} data={data} plugins={[plugin]} />;
    </div>
  );
}
