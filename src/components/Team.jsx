import React from 'react'
import Footer from './Footer'
import './styles.css'
import Member_template from './Member_template'
import DevTemplate from './dev_template'

export default function Team() {
    
    return (
        <div>
            <div className='teamContainer'>
                <br />
                <div>
                    <p className='title_2'>Core Team</p>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '30px 5%' }}>

                        <Member_template data={
                            {
                                name: "Vinnarasi Rajendran",
                                designation: "Principal Investigator",
                                description: "Dept. of Civil Engineering, IIT Roorkee",
                                src: "/members/vinnarasi.png"
                            }
                        } />


                        <Member_template data={
                            {
                                name: "Usman Mohseni Aliakbar",
                                designation: "PhD Candidate",
                                description: "Dept. of Civil Engineering, IIT Roorkee",
                                src: "/members/Usman.jpg"
                            }
                        } />

                        <Member_template data={
                            {
                                name: "Muskula Sai Bargav Reddy",
                                designation: "PhD Candidate",
                                description: "Dept. of Civil Engineering, IIT Roorkee",
                                src: "/members/bhargav.jpg"
                            }
                        } />
                        <Member_template data={
                            {
                                name: "Mayank Singh Gailakoti",
                                designation: "M.Tech Student",
                                description: "Dept. of Civil Engineering, IIT Roorkee",
                                src: "/members/mayank.jpg"
                            }
                        } />

                        <Member_template data={
                            {
                                name: "Saurav Raj",
                                designation: "Junior Research Fellow",
                                description: "Dept. of Civil Engineering, IIT Roorkee",
                                src: "/members/sourav.jpg"
                            }
                        } />

                        <Member_template data={
                            {
                                name: "Sahir Azam Shad",
                                designation: "Junior Research Fellow",
                                description: "",
                                src: "/members/Sahir.jpg"
                            }
                        } />

                        {/* <Member_template data={
                            {
                                name: "Usman Mohseni Aliakbar",
                                designation: "PhD Candidate",
                                description: "Dept. of Civil Engineering, IIT Roorkee",
                                src:"/members/Usman.png"
                            }
                        } /> */}



                    </div>
                </div>

                <div>
                    <p className='title_2'>Development Team</p>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '30px 5%' }}>


                        <DevTemplate data={
                            {
                                name: "Piyush Chavan",
                                designation: "Developer",
                                description: "Dept. of Computer Science Engineering, IIT Roorkee",
                                src: "/members/piyush.jpg",
                                links: ["https://github.com/piyush-chavan", 'https://www.linkedin.com/in/piyush-chavan-9ab090267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app']
                            }
                        }

                        />

                        <DevTemplate
                            data={
                                {
                                    name: "Bolapati Nithin Nathanael",
                                    designation: "Developer",
                                    description: "Dept. of Computer Science Engineering, IIT Roorkee",
                                    src: "/members/nithin.jpg",
                                    links: ["https://github.com/Hacker-nn", 'https://www.linkedin.com/in/nithin-nathanael-7314b3260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app']

                                }
                            }
                        />

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
