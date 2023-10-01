import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./DataVisualization.css";

const DataVisualization = ({ data }) => {
  const chartRefs = useRef([]);

  useEffect(() => {
    chartRefs.current = chartRefs.current.slice(0, data.length);

    data.forEach((item, index) => {
      const chartData = {
        labels: item.map((i) => i.name),
        datasets: [
          {
            data: item.map((i) => i.amount),
            radius: "40%", 
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
            ],
          },
        ],
      };

      const ctx = chartRefs.current[index].getContext("2d");

      new Chart(ctx, {
        type: "pie",
        data: chartData,
      });
    });
  }, [data]);

  return (
    
    <div className="data">
    <h1>Your Macros for daily meal</h1>
      <div className="chart-container">
        {data.map((item, index) => (
          <canvas key={index} ref={(ref) => (chartRefs.current[index] = ref)} />
        ))}
      </div>
    </div>
  );
};

export default DataVisualization;
