import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./Visualization.css";
import { useUserName } from "../hooks/useUsername";



const DataVisualization = ({ data }) => {
  //useRef hook is used to keep data across renders without re-renders. 
  const chartRefs = useRef([]);
  const userName = useUserName();
  
  //main logic for creating and updating chart is placed it is a side effect that runs,
  //whenever the 'data' prop changes.
  useEffect(() => {
    
    //ensures incoming data == same length as chartRefs Array.
    chartRefs.current = chartRefs.current.slice(0, data.length);

    //basically forEach item in the 'data' array, form a new chart with a unique configuration.
    data.forEach((item, index) => {
      
      const chartData = {
        
        labels: item.map((i) => i.name),
        datasets: [
          {
            data: item.map((i) => i.amount),
            label: `${userName}'s Info`,
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 0.3)",
              "rgba(255, 206, 86, 0.3)",
              "rgba(75, 192, 192, 0.3)",
            ],
          },
        ],
      };

      const ctx = chartRefs.current[index].getContext("2d");

      new Chart(ctx, {
        type: 'polarArea',
        data: chartData,
        options: {
          responsive: true,
          scales: {
            r: {
              pointLabels: {
                display: true,
                centerPointLabels: true,
                font: {
                  size: 13
                }
              }
            }
          },
          plugins: {
            legend: {
              position: 'left',
            },
            title: {
              display: true,
              text: `${userName}'s Daily Macro`,
              font: {
                size: 20
              }
  
            }
          }
        }
      });
    });
  }, [data]);

  return (
    <div className="data">
      <div className="chart-container" >
        
        {data.map((item, index) => (
          <canvas key={index} ref={(ref) => (chartRefs.current[index] = ref)} />
        ))}
      </div>
    </div>
  );
};

export default DataVisualization;
