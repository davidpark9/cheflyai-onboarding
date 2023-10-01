import React, { useEffect, useState } from 'react';
import DataVisualization from '../components/DataVisualization';
import "./pages-css/dataviz.css";



const DataViz = () =>{
    const storedRecipe= localStorage.getItem("recipe")
    // console.log("s",storedRecipe);
    const persedRes= JSON.parse(storedRecipe)
    // console.log("p",persedRes);
    

  return (
    <div className='dataCanvas'>
      <DataVisualization data={persedRes} />
    </div>
  );
};

export default DataViz;