import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom';

export default function Explore() {
    const navigate1 = useNavigate();
    const isAuthenticated = localStorage.getItem("user");
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return (
        <div style={{ margin: '10px', padding: '20px' }}>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                <div className='mapCard'>
                    <img src={require('../assets/images/historic_flood.png')} alt="" style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px', borderRadius: '20px' }} />
                    <br /><br />
                    <p className='title_2'>Design Flood for Historical Data</p>
                    <button onClick={() => navigate1('/home')} className='btn btn-dark'>CheckOut</button>
                </div>
                <div className='mapCard'>
                    <img src={require('../assets/images/futuristic_flood.png')} alt="" style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px', borderRadius: '20px' }} />
                    <br /><br />
                    <p className='title_2'>Design Flood for Future Climate</p>
                    <button type='button' className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#staticBackdrop">CheckOut</button>

            

                    
                    <div style={{zIndex:'5000'}} class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Under Working ... Coming Soon... 😊</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Design Flood for Future Climate is under construction , You can see data and plots for Design flood for Historical Data.
                                </div>
                                <div class="modal-footer">
                                    <button style={{backgroundColor:'var(--primary)'}} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
