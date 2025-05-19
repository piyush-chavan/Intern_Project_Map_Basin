import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend,
  CartesianGrid, ResponsiveContainer
} from 'recharts';

function ExcelChartFromPath() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadExcel = async () => {
      const response = await fetch('/data.xlsx');
      const arrayBuffer = await response.arrayBuffer();

      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const headers = rawData[0];
      const rows = rawData.slice(1);

      const formatted = rows.map((row, index) => {
        let entry = { x: index + 1 }; // 1 to 99 on x-axis
        headers.forEach((header, i) => {
          entry[header] = row[i];
        });
        return entry;
      });

      setData(formatted);
    };

    loadExcel();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      {/* <h3>Excel Line Graph</h3> */}
      {data.length > 0 && (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Object.keys(data[0])
              .filter((key) => key !== 'x')
              .map((key, idx) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={['#8884d8', '#82ca9d', '#ff7300', '#d62728', '#2ca02c'][idx % 5]}
                />
              ))}
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ExcelChartFromPath;
