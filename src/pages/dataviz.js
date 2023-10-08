import React, { useEffect,useContext, useState } from 'react';
import DataVisualization from '../components/DataVisualization';
import DavidVisualization from '../components/DavidVisualization';
import "./pages-css/data.css";
import { RecipeContext } from '../components/context/RecipeContext';

const DataViz = () => {
    const{state}=useContext(RecipeContext)
    const parsedRes = state.recipes;

    const aggregatedData = parsedRes.reduce((acc, meal) => {
        meal.forEach((nutrient) => {
            const existingIndex = acc.findIndex((item) => item.name === nutrient.name);
            if (existingIndex !== -1) {
                acc[existingIndex].amount += nutrient.amount;
            } else {
                acc.push({ ...nutrient });
            }
        });
        return acc;
    }, []);

    return (
        <div className='dataCanvas'>
            <DataVisualization data={[aggregatedData]} />
            <DavidVisualization />
        </div>
    );
};

export default DataViz;
