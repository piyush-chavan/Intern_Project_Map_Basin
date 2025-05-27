import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend,
  CartesianGrid, ResponsiveContainer, Area, Label,
  AreaChart,
  ComposedChart
} from 'recharts';


const CustomTooltip = ({ active, payload, label }) => {
  payload = payload.filter(item => item.name != "E_minus_D")
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: 'white', opacity: '0.8', padding: 10, border: '1px solid #ccc', borderRadius: 6 }}>
        <p style={{ margin: 0 }}><strong>Index:</strong> {label}</p>
        {payload.map((item, index) => (
          <p key={index} style={{ margin: 0, color: item.color }}>
            {item.name}: {item.value}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const CustomLegend = ({ payload }) => (
  <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', justifyContent: 'space-evenly', padding: '0 20%' }}>
    {payload.map((entry, index) => {
      const displayName = entry.value === "E_minus_D" ? "Ensemble" : entry.value;
      const isBox = entry.value === "E_minus_D";
      return (
        <li key={index} style={{ color: entry.color }}>
          <span style={{ color: entry.color }}>
            {isBox ? (
              <div
                style={{
                  width: 24,
                  height: 14,
                  display: 'inline-block',
                  backgroundColor: entry.color,
                  marginRight: 8,
                }}
              />
            ) : (
              <svg width="24" height="10" style={{ marginRight: 8 }}>
                <line
                  x1="0"
                  y1="5"
                  x2="24"
                  y2="5"
                  stroke={entry.color}
                  strokeWidth={2}
                  strokeDasharray={entry.payload.strokeDasharray || ""}
                />
              </svg>
            )}


          </span> {displayName}
        </li>
      );
    })}
  </ul>
);


function ExcelChartFromFile({ fileUrl, plot_no }) {
  const [data, setData] = useState([]);

  const univariate_y_axis = [
    "Return Level (Discharge m\u00B3/s)(× 10\u2074)",
    "Return Level (Duration Days)",
    "Return Level (Volume m\u00B3) (× 10\u2074)"
  ]


  const loadExcel = async (fileUrl) => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        // throw new Error(`Failed to fetch Excel file: ${response.statusText}`);
        // setData(undefined)
        return;
      }
      const arrayBuffer = await response.arrayBuffer();

      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const headers = rawData[0];
      const rows = rawData.slice(1);

      const formatted = rows.map((row, index) => {
        const entry = { x: index + 2 };
        headers.forEach((header, i) => {
          const value = parseFloat(row[i]);
          entry[header] = isNaN(value) ? null : value;
        });

        // 👇 Add E_minus_D for area fill
        if (entry["E"] != null && entry["D"] != null) {
          entry["E_minus_D"] = entry["E"] - entry["D"];
        } else {
          entry["E_minus_D"] = null;
        }

        return entry;
      });

      setData(formatted);
    }

    catch (error) {
      console.error("Error reading Excel file:", error.message);
      setData(undefined); // Optional: clear or handle gracefully
    }
  };
  useEffect(() => {
    if (!fileUrl) return;

    loadExcel(fileUrl);
  }, [fileUrl]);
  const customLegendNames = {
    A: 'Mean',
    B: '5 % Cl',
    C: '95% Cl',
    D: 'Ensemble',
    E: 'Ensemble',
  };

  return (
    <div style={{ padding: 20 }}>
      {data ?
        <ResponsiveContainer width="100%" height={400} style={{ backgroundColor: 'white' }} >
          <ComposedChart data={data} style={{ padding: '40px' }}>
            <CartesianGrid stroke="#ccc" />
            <XAxis
              dataKey="x"
              type="number"
              domain={[0, 100]}
              ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]} // Step of 5
              stroke="black" // Color of axis line and ticks
              tick={{ fill: 'black' }} // Color of tick labels
              label={{ fill: 'black' }} // Label color
            >
              <Label fill='black' value="Return Period (years)" offset={-20} position="insideBottom" />
            </XAxis>
            {plot_no != 2 ?
              <YAxis
                domain={[0, 'auto']}
                tickFormatter={(value) => `${value / 1e4} `}
                stroke="black" // Color of axis line and ticks
                tick={{ fill: 'black' }} // Color of tick labels
                label={{ fill: 'black' }} // Label color
              >
                <Label fill='black' value={univariate_y_axis[plot_no - 1]} offset={-40} angle={-90} dy={120} position="insideLeft" />
              </YAxis>
              :
              <YAxis
                domain={[0, 'auto']}
                tickFormatter={(value) => `${value / 1e0} `}
                stroke="black" // Color of axis line and ticks
                tick={{ fill: 'black' }} // Color of tick labels
                label={{ fill: 'black' }} // Label color
              >
                <Label fill='black' value={univariate_y_axis[plot_no - 1]} offset={-40} angle={-90} dy={120} position="insideLeft" />
              </YAxis>}
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />


            {/* Area stack: bottom at D, top at E (as E_minus_D) */}
            <Area
              type="monotone"
              dataKey="D"
              stroke="none"
              fill="transparent"
              stackId="1"
            />
            <Area
              type="monotone"
              dataKey="E_minus_D"
              stroke="none"
              fill="orange"
              fillOpacity={0.3}
              stackId="1"
            />

            {/* Optional visible lines for D and E */}
            {/* <Line name={customLegendNames["D"] || "D"} type="monotone" dataKey="D" stroke="#d62728" dot={false} activeDot={{ r: 6 }} strokeWidth={3} />
            <Line name={customLegendNames["E"] || "E"} type="monotone" dataKey="E" stroke="#ff7300" dot={false} activeDot={{ r: 6 }} strokeWidth={3} /> */}
            {/* Normal lines */}
            {data && data.length>0 && (["B", "C"].map((key) =>
              data[0][key] != null ? (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  name={customLegendNames[key] || key}
                  stroke='red'
                  dot={false} activeDot={{ r: 6 }}
                  strokeWidth={3}
                  strokeDasharray="4 4"
                />
              ) : null
            ))}
            <Line
              key={"A"}
              type="monotone"
              dataKey={"A"}
              name={customLegendNames["A"] || "A"}
              stroke='blue'
              dot={false} activeDot={{ r: 6 }}
              strokeWidth={4}
            />
          </ComposedChart>
        </ResponsiveContainer>
        : <p>This graph is not available in database </p>}
    </div>
  );
}

export default ExcelChartFromFile;
