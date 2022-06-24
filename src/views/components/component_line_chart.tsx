import React from "react";

import { Line } from "react-chartjs-2";
import { CategoryScale, LinearScale } from "chart.js";
import Chart from "chart.js/auto";


Chart.register(CategoryScale);
const data = {
  labels: [
    "Jan",
    "Jul",
    "Feb",
    "Aug",
    "Mar",
    "Sep",
    "Apr",
    "Oct",
    "May",
    "Nov",
    "Jun",
  ],
  datasets: [
    {
      label: "First dataset",
      data: [0, 5300, 8500, 4100, 4400, 14200],
      fill: true,
      background:
        "linear-gradient(180deg, rgba(100, 185, 220, 0.15) 0%, rgba(170, 226, 245, 0) 100.22%)",
      borderColor: "#48B2DE",
    },
  ],
};
const options :any = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    
    
  },
};

export default function ComponentLineChart() {
  return (
    <div className="App">
      <Line options={options} data={data} />
    </div>
  );
}
