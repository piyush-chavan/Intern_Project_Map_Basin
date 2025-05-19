import React from 'react'
import Footer from './Footer'
import './styles.css'
import Member_template from './Member_template'

export default function Team() {
    return (
        <div>
            <div>
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

                        <Member_template data={
                            {
                                name: "Piyush Chavan",
                                designation: "Developer",
                                description: "Dept. of Computer Science Engineering, IIT Roorkee",
                                src: "/members/piyush.jpg"
                            }
                        } />

                        <Member_template data={
                            {
                                name: "Bolapati Nithin Nathanael",
                                designation: "Developer",
                                description: "Dept. of Computer Science Engineering, IIT Roorkee",
                                src: "/members/nithin.jpg"
                            }
                        } />



                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
