
import React from 'react';
import * as d3 from 'd3';

import DataVisualization from './DataVisualization';

const data = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 },
];

const DataVisualization = () => {
  const render = () => {
    const svg = d3.select('svg');

    const line = d3.line().x(function(d) { return d.x; }).y(function(d) { return d.y; });

    svg.append('path').attr('d', line(data));
  };

  return (
    <div>
      <svg ref={render} />
    </div>
  );
};

export default DataVisualization;
