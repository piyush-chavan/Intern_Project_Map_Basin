import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import * as XLSX from "xlsx";

const ContourPlot = ({
    filePath,
    ScatterPath,
    allowedZValues = [2.0, 5.0, 10.0, 20.0],
    tolerance = 3,
    plot_no = 1,
    orand = 0,
}) => {
    const [xGrid, setXGrid] = useState([]);
    const [yGrid, setYGrid] = useState([]);
    const [zGrid, setZGrid] = useState([]);
    const [xst, setXst] = useState([]);
    const [yst, setYst] = useState([]);
    const [zst, setZst] = useState([]);

    const axisLabels = [
        {
            y: "Duration(days)",
            x: "Peak(m\u00B3/s)(x 10<sup>4</sup>)"
        },
        {
            y: "Volume(m\u00B3)(x 10<sup>4</sup>)",
            x: "Peak(m\u00B3/s)(x 10<sup>4</sup>)"
        },
        {
            y: "Volume(m\u00B3)(x 10<sup>4</sup>)",
            x: "Duration(days)"
        }
    ];
    const excelsheets = [
        [
            ["RP_OR_FD", "F1_FD", "F2_FD", "st_RP_OR_FD", "st_F1_FD", "st_F2_FD"],
            ["RP_OR_FV", "F1_FV", "F2_FV", "st_RP_OR_FV", "st_F1_FV", "st_F2_FV"],
            ["RP_OR_DV", "F1_DV", "F2_DV", "st_RP_OR_DV", "st_F1_DV", "st_F2_DV"]

        ],

        [
            ["RP_AND_FD", "F1_FD", "F2_FD", "st_RP_AND_FD", "st_F1_FD", "st_F2_FD"],
            ["RP_AND_FV", "F1_FV", "F2_FV", "st_RP_AND_FV", "st_F1_FV", "st_F2_FV"],
            ["RP_AND_DV", "F1_DV", "F2_DV", "st_RP_AND_DV", "st_F1_DV", "st_F2_DV"]

        ],
    ];
    const Scattersheet = [
        {
            x: "PF",
            y: "PD"
        },
        {
            x: "PF",
            y: "PV"
        },
        {
            x: "PD",
            y: "PV"
        },
    ];



    useEffect(() => {
        const loadExcel = async () => {
            const response = await fetch(filePath);
            const data = await response.arrayBuffer();
            const workbook = XLSX.read(data, { type: "array" });

            const readSheet = (sheetName) => {
                const sheet = workbook.Sheets[sheetName];
                const raw = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                return raw.map((row) => row.map(Number)); // Ensure values are numbers
            };

            const x = readSheet(excelsheets[orand][plot_no - 1][1]);
            const y = readSheet(excelsheets[orand][plot_no - 1][2]);
            const z = readSheet(excelsheets[orand][plot_no - 1][0]);
            const x1 = readSheet(excelsheets[orand][plot_no - 1][4]);
            const y1 = readSheet(excelsheets[orand][plot_no - 1][5]);
            const z1 = readSheet(excelsheets[orand][plot_no - 1][3]);

            // Filter Z values: keep if close to any allowedZ value (within ±tolerance)
            const zFiltered = z.map((row) =>
                row.map((val) =>
                    allowedZValues.some(
                        (target) => Math.abs(val - target) <= tolerance
                    )
                        ? val
                        : null
                )
            );
            // const zFiltered = z.map(row =>
            //     row.map(val => {
            //         // Find the closest allowed value within tolerance
            //         let closest = null;
            //         let minDiff = Infinity;

            //         for (let target of allowedZValues) {
            //             const diff = Math.abs(val - target);
            //             if (diff <= tolerance && diff < minDiff) {
            //                 minDiff = diff;
            //                 closest = target;
            //             }
            //         }

            //         return closest !== null ? closest : null;
            //     })
            // );

            const zFiltered1 = z1.map((row) =>
                row.map((val) =>
                    allowedZValues.some(
                        (target) => Math.abs(val - target) <= tolerance
                    )
                        ? val
                        : null
                )
            );


            setXGrid(x);
            setYGrid(y);
            setZGrid(zFiltered);
            setXst(x1);
            setYst(y1);
            setZst(zFiltered1);
        };

        loadExcel();
    }, [filePath, allowedZValues, tolerance, orand, plot_no]);
    const [xData, setXData] = useState([]);
    const [yData, setYData] = useState([]);

    useEffect(() => {
        const loadExcelData = async () => {
            try {
                const response = await fetch(ScatterPath); // Ensure this file is in /public
                const arrayBuffer = await response.arrayBuffer();
                const workbook = XLSX.read(arrayBuffer, { type: "array" });

                const sheetX = workbook.Sheets[Scattersheet[plot_no - 1].x]; // Sheet with X values
                const sheetY = workbook.Sheets[Scattersheet[plot_no - 1].y]; // Sheet with Y values

                if (!sheetX || !sheetY) {
                    console.error("Sheet names PV or PD not found in Excel.");
                    return;
                }

                const xRaw = XLSX.utils.sheet_to_json(sheetX, { header: 1 });
                const yRaw = XLSX.utils.sheet_to_json(sheetY, { header: 1 });

                const xCol = xRaw.map(row => row[0]).filter(v => v != null);
                const yCol = yRaw.map(row => row[0]).filter(v => v != null);

                const minLength = Math.min(xCol.length, yCol.length);
                setXData(xCol.slice(0, minLength));
                setYData(yCol.slice(0, minLength));
            } catch (error) {
                console.error("Failed to load or parse Excel file:", error);
            }
        };

        loadExcelData();
    }, [ScatterPath, plot_no]);
    const [xDivided, setxDivided] = useState();
    const [yDivided, setyDivided] = useState();
    const [xTicks, setxTicks] = useState({ tickvals: [], ticktext: [] });
    const [yTicks, setyTicks] = useState({ tickvals: [], ticktext: [] });
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(false);
        const xmax = Math.max(...xData);
        const ymax = Math.max(...yData);

        const threshold = 5000;
        const xDivided1 = xmax > threshold;
        const yDivided1 = ymax > threshold;
        setxDivided(xDivided1);
        setyDivided(yDivided1);

        const getTicks = (maxVal, divideBy) => {
            var step = divideBy;
            const tickvals = [];
            const ticktext = [];
            if (maxVal > 100000) { step = 20000 }
            else if (maxVal < 20000) { step = 2500 }
            else if (maxVal < 40000) { step = 5000 }
            else { step = 10000 }
            for (let i = 0; i <= maxVal; i += step) {
                tickvals.push(i);
                ticktext.push((i / divideBy).toString());
            }
            return { tickvals, ticktext };
        };

        const xTicks1 = xDivided1 ? getTicks(xmax, 10000) : { tickvals: [], ticktext: [] };
        const yTicks1 = yDivided1 ? getTicks(ymax, 10000) : { tickvals: [], ticktext: [] };

        setxTicks(xTicks1);
        setyTicks(yTicks1);

        setReady(true);
    }, [xData, yData]);


    return (
        <div style={{ width: '450px', margin: '20px auto', border: '2px solid black' }}>
            {/* <p>orand:{orand} plot:{plot_no}</p> */}
            {
                ready && xGrid.length > 0 && yGrid.length > 0 && zGrid.length > 0 ? (
                    <Plot
                        key={xTicks.tickvals.join(',') + yTicks.tickvals.join(',')}
                        data={[
                            {
                                type: "contour",
                                x: xGrid[0],
                                y: yGrid.map((row) => row[0]),
                                z: zGrid,
                                contours: {
                                    coloring: "lines",
                                    showlabels: true
                                },
                                colorscale: [[0, "red"], [1, "red"]], // ✅ Fake scale: all black
                                line: {
                                    width: 2,              // Line thickness
                                    dash: 'dot'
                                },
                                showscale: false
                            },
                            {
                                type: "contour",
                                x: xst[0],
                                y: yst.map((row) => row[0]),
                                z: zst,
                                contours: {
                                    coloring: "lines",
                                    showlabels: true
                                },
                                colorscale: [[0, "black"], [1, "black"]], // ✅ Fake scale: all black
                                line: {
                                    width: 2,
                                    dash: 'dot'
                                },
                                showscale: false
                            },
                            {
                                x: xData,
                                y: yData,
                                type: "scatter",
                                mode: "markers",
                                marker: { color: "blue", size: 6 },
                                name: "Scatter Points"
                            }
                        ]}
                        layout={{
                            autosize: true,
                            title: `Contour Plot for Z ≈ {${allowedZValues.join(", ")}} ±${tolerance}`,
                            margin: { l: 80, r: 40, t: 50, b: 80 },
                            xaxis: {
                                title: {
                                    text: axisLabels[plot_no - 1].x,
                                    font: { size: 16, color: "#333" }
                                },
                                tickvals: plot_no != 3 && xTicks ? xTicks.tickvals : undefined,
                                ticktext: plot_no != 3 && xTicks ? xTicks.ticktext : undefined,
                                tickformat: '',
                                showexponent: 'none',
                            },
                            yaxis: {
                                title: {
                                    text: axisLabels[plot_no - 1].y,
                                    font: { size: 16, color: "#333" }
                                },
                                tickvals: plot_no != 1 && yTicks ? yTicks.tickvals : undefined,
                                ticktext: plot_no != 1 && yTicks ? yTicks.ticktext : undefined,
                                tickformat: '',
                                showexponent: 'none',
                            }
                        }}
                        useResizeHandler
                        style={{ width: '100%', height: '100%' }}
                    />
                ) : <> <p>Loading / Data for graph not available in database</p> <div className="spinner"></div> </>

            }


        </div>
    );
};

export default ContourPlot;
