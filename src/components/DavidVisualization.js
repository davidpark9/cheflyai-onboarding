import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Visualization.css';

const DavidVisualization = () => {
  const chartRef = useRef(null);

  function initChart(){
    
    const data = {
      labels: ['Calories', 'Fats', 'Carbohydrates', 'Protein'],
      datasets: [
        {
          label: `David's Info`,
          data: [1592.04, 49.26, 175.5, 82.16],
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
          ],
        },
      ],
    };
   
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'polarArea',
      data,
      options: {
        plugins: {
          legend: {
            position: 'left',
          },
        },
      },
    });
  }

  useEffect(initChart, []);

  return (
    <div className="data">
      <div className="chart-container">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default DavidVisualization;
