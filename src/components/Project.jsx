import React from 'react'
import Footer from './Footer'
import './styles.css'

export default function Project() {
  return (
    <div>
      <p className='title_2'>Project</p>
      <div style={{margin:'30px 10%'}}>

      <p className='title_2' style={{textAlign:'start'}}>Project Summary  </p>
      <p className='normalText'>The intensification of extreme weather and climatic events, evident in the recent past, has resulted in severe damage/failure to the water resource infrastructure. These infrastructures are not expected to be resilient to the changing climate, as they were planned and designed based on the conventional stationarity assumption. Hence, several studies have recommended the idea of capturing the temporal dynamics (i.e., non-stationarity) in extremes. Nonstationary modelling developed merely by addressing the changes in extremes over time, without understanding the physical interpretation, results in an unreliable future prediction. Without incorporating the physical factors, Nonstationary modelling may produce more uncertainty than stationary modelling. This study investigates the physical relevance behind the changes in flood characteristics and develops a robust approach to estimate the design flood through the multivariate Flood Frequency Analysis (FFA) for a changing climate and environment. The signature of both long-term and short-term non-stationarity is detected in the flood peak, flood volume and flood duration. Further, the physical factors (i.e., process-informed covariates) that influence these changes will be identified, and a suitable covariate-based model will be developed to perform nonstationary FFA. The design flood and joint return period for major riverine flood basins in India will be estimated, providing information for the design and operation of hydraulic structures incorporating flood risk. It will also pave the way for further research in River flood management, dynamic reservoir management and flood forecasting under a changing climate and environment.</p>
      <p className='title_2' style={{textAlign:'start'}} >Objectives </p>
      <p className='normalText'>The following objectives are formulated to address the gap in the literature: <br />
        1. Detect and attribute the temporal short-term and long-term changes (if any) in the extreme streamflow characteristics (flood peak, flood volume and flood duration). <br />
        2. Examine the flood frequency characteristics through exploring the effect of non-stationarity through identified process-informed covariates and interdependency between the flood characteristics. <br />
        3. Investigate the occurrence and distribution of flood events for future climate, considering the projections of process-informed covariates from various general circulation models, land change models and different future scenarios. <br />
        4. Formulate possible methodologies to quantify or even reduce the uncertainty to improve the reliability of design flood estimation under the nonstationary condition <br />
      </p>
      <p className='title_2' style={{textAlign:'start'}} >KeyWords </p>
      <p className='normalText'>Design flood, nonstationarity model, joint return period, frequency analysis, climate change</p>
      </div>
      <Footer />
    </div>
  )
}
