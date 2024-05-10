// import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5  ft-1">
                            <h3>Head Office</h3>
                            <p className='txt'> <i className="fas fa-map-marker-alt img" ></i>
                                Level 35,<br/>
                                <span>The Gateway West 150 Beach Road,</span><br/>  
                                <span> Singapore 189720 .</span> <br/>
                                <i className="fas fa-phone-volume callIcon1" ></i>Contact: +45 00000000
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4  ft-1 address2">
                        <h3>Sri Lankan Office</h3>
                            <p className='txt'> <i className="fas fa-map-marker-alt img2" ></i>
                                 No 286,<br/>
                                <span>R. A. De Mel Mawatha,</span><br/>  
                                <span> Colombo 00300,</span> <br />
                                <span>Sri Lanka .</span><br />
                                <i className="fas fa-phone-volume callIcon2" ></i>Contact: +11 22334455
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3  ft-2 resources">
                            <h3>Resources</h3>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Events & News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">FAQs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Careers</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-5  ft-1">
                            <div className="footer-icons img icons">
                                <i className="fab fa-facebook facebook"></i>
                                <i className="fa-brands fa-x-twitter twitter"></i>
                                <i className="fab fa-instagram instagram"></i>
                                <i className="fab fa-linkedin-in linkedIn"></i>
                                <i class="fa-brands fa-square-youtube youtube"></i>
                            </div>
                        </div>
                        <div className=" col-lg-4  ft-1 address2">
                        </div>
                        <div className="col-md-6 col-lg-3  ft-2 ownerRights">
                            <h6>Developed by ConnexIT</h6>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='Last-footer'>
                <p>Design By Connex IT</p>
            </div> */}
        </>
    );
};

export default Footer;
