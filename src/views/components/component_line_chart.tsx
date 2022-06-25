import React, { useState } from "react";

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
  const [active,setActive]=useState(1)
  return (
    <div className="">
      <div className="line-chart p-4">
        <div className="row d-flex align-items-center ">
          <div className="col-6">
            <div className="text-header-line">Sales Summary</div>
          </div>
          <div className="col-6 text-end">
            <div className="row box-filter p-2 d-flex align-items-center">
              <div onClick={()=>setActive(1)} className={`col-3 text-center ${active==1 && 'active' }`}>
                <div>1 year</div>
              </div>
              <div onClick={()=>setActive(2)} className={`col-3 text-center ${active==2 && 'active' }`}>
                <div>6 Month</div>
              </div>
              <div onClick={()=>setActive(3)} className={`col-3 text-center ${active==3 && 'active' }`}>
                <div>3 Month</div>
              </div>
              <div onClick={()=>setActive(4)} className={`col-3 text-center ${active==4 && 'active' }`}>
                <div>1 Week</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
        <Line options={options} data={data} />

        </div>
      </div>
    </div>
  );
}
