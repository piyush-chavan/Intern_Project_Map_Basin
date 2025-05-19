// src/components/RainfallPlot.js
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

function Graph() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('/rainfallData.json') // Ensure this is in the public/ folder
//       .then(res => res.json())
//       .then(setData);
//   }, []);

//   if (!data) return <div>Loading rainfall data...</div>;
    const data = {
        time:[1,2,3,4,5,6],
        rainfall:[2,10,6,4,8,3]
    }

  return (
    <Plot
      data={[
        {
          x: data.time,
          y: data.rainfall,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'blue' },
          name: 'Rainfall (mm)',
        },
      ]}
      layout={{
        title: 'Monthly Rainfall Over Time',
        xaxis: { title: 'Date' },
        yaxis: { title: 'Rainfall (mm)' },
      }}
    />
  );
}

export default Graph;
