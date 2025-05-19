import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend,
  CartesianGrid, ResponsiveContainer, Area ,Label
} from 'recharts';

function ExcelChartFromFile({ fileUrl }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadExcel = async () => {
      const response = await fetch(fileUrl);
      const arrayBuffer = await response.arrayBuffer();

      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const headers = rawData[0];
      const rows = rawData.slice(1);

      const formatted = rows.map((row, index) => {
        const entry = { x: index + 1 };
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
    };

    loadExcel();
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
        <ResponsiveContainer width="100%" height={400} style={{padding:'20px',paddingBottom:"30px"}} >
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="x" >
              <Label value="Return Period" offset={-30} position="insideBottom" />
            </XAxis>
            <YAxis >
              <Label value="Return Level" offset={-10} angle={-90} position="insideLeft" />
            </YAxis>
            <Tooltip />
            <Legend />

            {/* Normal lines */}
            {["A", "B", "C"].map((key, idx) =>
              data[0][key] != null ? (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  name={customLegendNames[key] || key}
                  stroke={['#8884d8', '#82ca9d', '#ffc658'][idx]}
                />
              ) : null
            )}

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
              fill="#ff7300"
              fillOpacity={0.3}
              stackId="1"
            />

            {/* Optional visible lines for D and E */}
            <Line name={customLegendNames["D"]||"D"} type="monotone" dataKey="D" stroke="#d62728" />
            <Line name={customLegendNames["E"]||"E"} type="monotone" dataKey="E" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ExcelChartFromFile;
