import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend,
  CartesianGrid, ResponsiveContainer, Area, Label,
  AreaChart,
  ComposedChart
} from 'recharts';

function ExcelChartFromFile({ fileUrl }) {
  const [data, setData] = useState([]);

  const loadExcel = async (fileUrl) => {
    const response = await fetch(fileUrl);
    if (!response.ok) {
      // throw new Error(`Failed to fetch Excel file: ${response.statusText}`);
      setData(null)
    }
    else {
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
  };
  useEffect(() => {

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
      {data.length > 0 && (
        <ResponsiveContainer width="100%" height={400} style={{ backgroundColor: 'white' }} >
          <ComposedChart data={data} style={{ padding: '40px' }}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="x" >
              <Label value="Return Period" offset={-20} position="insideBottom" />
            </XAxis>
            <YAxis >
              <Label value="Return Level" offset={-20} angle={-90} position="insideLeft" />
            </YAxis>
            <Tooltip />
            <Legend
            // payload={payload.filter(entry => entry.value !== "E_minus_D")}
            />


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
              legendType="none"
            />

            {/* Optional visible lines for D and E */}
            <Line name={customLegendNames["D"] || "D"} type="monotone" dataKey="D" stroke="#d62728" dot={false} activeDot={{ r: 6 }} strokeWidth={3} />
            <Line name={customLegendNames["E"] || "E"} type="monotone" dataKey="E" stroke="#ff7300" dot={false} activeDot={{ r: 6 }} strokeWidth={3} />
            {/* Normal lines */}
            {["A", "B", "C"].map((key, idx) =>
              data[0][key] != null ? (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  name={customLegendNames[key] || key}
                  stroke={['#8884d8', '#82ca9d', '#ffc658'][idx]}
                  dot={false} activeDot={{ r: 6 }}
                  strokeWidth={3}
                />
              ) : null
            )}
          </ComposedChart>
        </ResponsiveContainer>
      )}
      {data.length === 0 ? <p>This graph is not available in database </p> : null}
    </div>
  );
}

export default ExcelChartFromFile;
