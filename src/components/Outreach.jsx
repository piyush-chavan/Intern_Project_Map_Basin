import React from 'react'
import Footer from './Footer'
import './styles.css'

export default function Outreach() {
  return (
    <div>
      <p className='title_2'>Outreach</p>
      <div style={{ margin: '30px 8%' }}>

        <p className='title_2' style={{ textAlign: 'start' }}>Knowledge Transfer Session under Scientific Social Responsibility (SSR) Scheme  </p>
        <p className='normalText' style={{ color: 'red', fontWeight: '500' }}>Session 1: Methodist Girls Inter College Roorkee.</p>
        <p className='normalText'>
          As a part of the ANRF-sponsored project <b style={{ color: 'purple' }}>“Design flood estimation for resilient hydraulic structures under changing climate and environment” </b>, a Knowledge Transfer Session under Scientific Social Responsibility (SSR) Scheme was organized at the <b style={{ color: 'purple' }}> Methodist Girls Inter College, Roorkee was conducted on 20th May 2025.</b><br></br>
          This session involved knowledge transfer to the students of class 8th (45 students) on the concepts of <b style={{ color: 'purple' }}>climate change, precipitation extremes, various types of floods, rain rainwater harvesting techniques.</b> A quiz competition was also conducted to evaluate the understanding of the concepts delivered, prizes were distributed to 6 students.

        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', textAlign: 'center', border: '2px solid', borderRadius: "20px", padding: '20px' }}>
          <div style={{ width: 'min(100%,500px)', margin: '2px 5px' }}>

            <img style={{ maxWidth: '100%', borderRadius: '10px' }} src={require('../assets/images/outreach_1.jpg')} alt="" />
            <p className='secondaryText' style={{ textAlign: 'center', marginTop: '10px' }}>Prize distribution for the winners of the quiz competition</p>
          </div>
          <div style={{ width: 'min(100%,500px)', margin: '2px 5px' }}>

            <img style={{ maxWidth: '100%', borderRadius: '10px' }} src={require("../assets/images/outreach_2.jpg")} alt="" />
            <p className='secondaryText' style={{ textAlign: 'center', marginTop: '10px' }}>Students and Teachers with the IITR team.</p>
          </div>
        </div>

        <br /><br />
        <p className='title_2' style={{ textAlign: 'start', color: 'red' }} >Upcoming Events </p>
        <p className='normalText'><b >Session 2: 20th May 2025<br></br>
          SAFE 2025: Strategies for Adaptive Flood Estimation</b><br></br>
          The Department of Civil Engineering at IIT Roorkee is delighted to extend a warm invitation to an ANRF-sponsored one-day workshop titled <b>“SAFE: Strategies for Adaptive Flood Estimation”.</b> This insightful event is scheduled for <b>Tuesday, May 20, 2025, from 09:30 AM to 05:00 PM </b>at the Department of Civil Engineering, IIT Roorkee.
        </p>
        <br /><br />
        <p className='title_2' style={{ textAlign: 'start' }}  >About the Workshop</p>
        <p className='normalText'>
          As climate change and environmental shifts continue to impact hydrological systems, the design of resilient hydraulic structures demands innovative approaches to flood estimation. This workshop aims to equip participants with cutting-edge knowledge and tools to address the challenges of non-stationarity, uncertainty, and evolving flood characteristics in a changing world. Through expert-led sessions, interactive discussions, and practical insights, we will explore methodologies to enhance the resilience of hydraulic infrastructure.<br></br>
        </p>
        <br /><br />
        <p className='title_2' style={{ textAlign: 'start' }}  >Workshop Highlights</p>
        <p className='normalText'>
          &#8226; Understanding Non-Stationarity in Extreme Flow Characteristics: Learn how to account for changing patterns in flood events.<br></br>
          &#8226; Generic Framework for Nonstationary Multivariate Frequency Analysis: Discover advanced techniques for robust flood frequency modelling.<br></br>
          &#8226; Quantifying and Reducing Uncertainty in Design Flood Estimation: Gain strategies to improve the reliability of flood predictions.<br></br>
          &#8226; Identifying Potential Covariates for Extreme Flood Characteristics: Explore key factors influencing flood behaviour.<br></br>
          &#8226; Analysing Short-term and Long-term Trends: Examine trends in flood peaks, volumes, and durations to inform sustainable design.<br></br>
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign: 'center', border: '2px solid', borderRadius: "20px", padding: '5px' }}>
          <div style={{ width: 'min(100%,600px)', margin: '2px 5px' }}>
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>

              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Inaugral_1.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Inaugral_2.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Inaugral_3.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Inaugral_4.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Inaugral_5.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Inaugral_6.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Inaugral_7.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Inaugral_8.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div style={{ width: 'min(100%,600px)', margin: '2px 5px' }}>
            <div id="carouselExampleCaptions2" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="8" aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="9" aria-label="Slide 10"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="10" aria-label="Slide 11"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="11" aria-label="Slide 12"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="12" aria-label="Slide 13"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="13" aria-label="Slide 14"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="14" aria-label="Slide 15"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="15" aria-label="Slide 16"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="16" aria-label="Slide 17"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="17" aria-label="Slide 18"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="18" aria-label="Slide 19"></button>

              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_1.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_2.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_3.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_4.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_5.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_6.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_7.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_8.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_9.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_10.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_11.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_12.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_13.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_14.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_20.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_15.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_16.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_17.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/Closing_18.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaption2" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>


        <br /><br />
        <p className='normalText' style={{ color: 'red', fontWeight: '500' }}>Session 3: Adarsh Bal Niketan Senior Secondary School, IIT Roorkee Campus, Roorkee
          On 21st May 2025
        </p>
        <p className='normalText'>As part of the ANRF-sponsored project titled “Design Flood Estimation for Resilient Hydraulic Structures under Changing Climate and Environment,” a Knowledge Transfer Session was conducted under the Scientific Social Responsibility (SSR) Scheme at Adarsh Bal Niketan Senior Secondary School, IIT Roorkee Campus, on 21st May 2025. The session aimed to educate and raise awareness among young students about critical environmental and climate-related concepts, fostering a sense of scientific curiosity and responsibility. <br />
          The event engaged over 100 students from class 8th in an interactive and comprehensive knowledge-sharing program. The session covered key topics, including:
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign: 'center', padding: '5px' }}>
          <div style={{ width: 'min(100%,600px)', margin: '2px 5px' }}>
            <ul className='normalText' style={{ textAlign: 'start' }}>
              <li><b>Climate Change: </b> An introduction to the causes, impacts, and consequences of climate change, emphasizing global warming, greenhouse gas emissions, and their effects on weather patterns and ecosystems.</li>
              <li><b>Precipitation Extremes: </b> Explanation of extreme weather events, such as heavy rainfall and droughts, and their increasing frequency due to climate change, with a focus on their implications for water management and infrastructure.</li>
              <li><b>Types of Floods:</b> Detailed insights into various types of floods (e.g., riverine, flash, urban, and coastal floods), their causes, and their socio-economic and environmental impacts.
              </li>
              <li><b>Rainwater Harvesting Techniques:</b> Practical knowledge about sustainable water management practices, including methods of collecting, storing, and utilizing rainwater to mitigate water scarcity and reduce flood risks.
              </li>
            </ul>
          </div>
          <div style={{ width: 'min(100%,600px)', margin: '2px 5px' }}>
            <div id="carouselExampleCaptions3" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="8" aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="9" aria-label="Slide 10"></button>

              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/visit_1.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/visit_2.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/visit_3.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/visit_4.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/visit_5.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/visit_6.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/visit_7.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/visit_8.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/visit_9.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{ borderRadius: '20px' }} src={require('../assets/images/workshop_imgs/visit_10.jpg')} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>


        <p className="normalText">The session was designed to be engaging, with simplified explanations, real-world examples, and interactive discussions tailored to the students’ level of understanding. To reinforce the concepts and encourage active participation, a quiz competition was organized at the end of the session. The quiz tested the students’ grasp of the topics covered, and six outstanding performers were awarded prizes to recognize their efforts and motivate continued learning.
          This initiative under the SSR Scheme not only empowered the students with valuable knowledge about climate resilience and sustainable practices but also inspired them to contribute to environmental conservation in their communities. The event underscored the importance of educating the younger generation to build a sustainable future in the face of a changing climate.
        </p>
        <hr />
        <br />

        <p className='title_2'>Schedule of Workshop</p>
        <br />
        <img style={{ width: 'min(600px,100%)', margin: '10px', border: '2px solid var(--primary)', boxShadow: '0 0 10px black', borderRadius: '10px' }} src={require('../assets/images/workshop_imgs/workshop_schedule.jpg')} alt="" />

      </div>
      <Footer />
    </div>
  )
}
