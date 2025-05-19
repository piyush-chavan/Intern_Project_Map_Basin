import React from 'react';
import {
  LineChart, Line, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { x: 1, D: 20, E: 30 },
  { x: 2, D: 22, E: 34 },
  { x: 3, D: 23, E: 36 },
  { x: 4, D: 25, E: 38 },
  { x: 5, D: 27, E: 40 },
];

// Build a new array where:
// - AreaStart = D
// - AreaEnd = E
// - AreaHeight = E - D
const processedData = data.map((item) => ({
  ...item,
  areaBase: item.D,
  areaTop: item.E - item.D, // height of fill
}));

function AreaBetweenLines() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />

          {/* Invisible base area (starts from D) */}
          <Area
            type="monotone"
            dataKey="areaBase"
            stackId="1"
            stroke="none"
            fill="transparent"
          />

          {/* Actual filled area (E - D), stacked on base */}
          <Area
            type="monotone"
            dataKey="areaTop"
            stackId="1"
            stroke="none"
            fill="#8884d8"
            fillOpacity={0.9}
          />

          {/* Actual lines for D and E */}
          <Line type="monotone" dataKey="D" stroke="#ff7300" dot={false} />
          <Line type="monotone" dataKey="E" stroke="#2ca02c" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaBetweenLines;
