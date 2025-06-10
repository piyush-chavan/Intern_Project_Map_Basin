import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const ScatterPlot = ({ filePath, plot_no }) => {
    const [data, setData] = useState([]);
    const plot_map = [
        {
            x: "Peak",
            x1: "PF",
            y: "Duration",
            y1: "PD",
        },
        {
            x: "Peak",
            x1: "PF",
            y: "Volume",
            y1: "PV",
        },
        {
            x: "Duration",
            x1: "PD",
            y: "Volume",
            y1: "PV",
        }
    ]

    const loadExcelData = async () => {
        try {
            const response = await fetch(filePath);
            const arrayBuffer = await response.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: "array" });

            const sheet1 = workbook.Sheets[plot_map[plot_no - 1].x1];
            const sheet2 = workbook.Sheets[plot_map[plot_no - 1].y1];

            if (!sheet1 || !sheet2) {
                console.error("Sheet1 or Sheet2 not found.");
                return;
            }

            // Extract column 1 (A) from Sheet1 as X values
            const xRows = XLSX.utils.sheet_to_json(sheet1, { header: 1 });
            const xValues = xRows
                .map((row) => row[0])
                .filter((val) => typeof val === "number");

            // Extract column 1 (A) from Sheet2 as Y values
            const yRows = XLSX.utils.sheet_to_json(sheet2, { header: 1 });
            const yValues = yRows
                .map((row) => row[0])
                .filter((val) => typeof val === "number");

            const minLength = Math.min(xValues.length, yValues.length);
            const combined = Array.from({ length: minLength }, (_, i) => ({
                x: xValues[i],
                y: yValues[i],
            }));

            setData(combined);
        } catch (err) {
            console.error("Failed to load or parse Excel file:", err);
        }
    };

    useEffect(() => {
        loadExcelData();
    }, [filePath]);

    return (
        <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Scatter Plot from Excel</h2>
            {data.length > 0 ? (
                <ResponsiveContainer width="60%" style={{margin:'auto'}} height={400}>
                    <ScatterChart>
                        <CartesianGrid />
                        <XAxis
                            type="number"
                            dataKey="x"
                            name={plot_map[plot_no - 1].x}
                            label={{ value: plot_map[plot_no - 1].x, position: "insideBottom", offset: -5 }}

                        />
                        <YAxis
                            type="number"
                            dataKey="y"
                            name={plot_map[plot_no - 1].y}
                            label={{ value: plot_map[plot_no - 1].y, angle: -90, position: "insideLeft" }}
                        />
                        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                        <Scatter name="Excel Data" data={data} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
            ) : (
                <p>Loading data or no data found...</p>
            )}
        </div>
    );
};

export default ScatterPlot;
