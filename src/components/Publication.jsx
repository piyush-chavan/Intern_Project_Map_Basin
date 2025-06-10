import React from 'react'
import Footer from './Footer'
import './styles.css'
import ScatterPlot from './ScatterPlot'
import ContourPlot from './ContourPlot';
import HtmlPlot from './HtmlPlot';

export default function Publication() {
  return (
    <div>
      <p className='title_2'>Publication</p>
      {/* <ScatterPlot filePath={file} plot_no={1} />
      <ScatterPlot filePath={file} plot_no={2} />
      <ScatterPlot filePath={file} plot_no={3} /> */}
      {/* <ContourPlot
        filePath={`${process.env.PUBLIC_URL}/bivariate data/Mohgaon_Surf.xlsx`}
        ScatterPath={`${process.env.PUBLIC_URL}/bivariate data/Mohgaon_Scatter.xlsx`}



      /> */}

      <HtmlPlot source={`${process.env.PUBLIC_URL}/interactive_plot.html`}/>

            <HtmlPlot source={`${process.env.PUBLIC_URL}/my_interactive_plot.html`}/>



      <Footer />
    </div>
  )
}
