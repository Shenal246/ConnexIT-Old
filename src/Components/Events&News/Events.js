import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Events.css';
import card1 from '../../images/news.png'; // Assuming card1 is the variable holding the image import

const Events = () => {
    return (
        <div className="container">
            {/* first event row */}
            <div className="row cards">  
                <div className="col-lg-4 ">
                    <div className="card mb-3 card1 text-light position-relative crd rounded-5 ">
                        <div className="position-relative">
                            <img src={card1} className="card-img-top image rounded-top-5 opacity-75" alt="ConnexIT Logo" style={{ width: '100%', height: 'auto' }} /> {/* Adjusted image size */}
                            {/* Position the Link component at the center of the image */}
                            <div className="centered">
                            <Link to="http://localhost:3000/" className="fa-solid fa-play playicon" ></Link>

                            </div>
                        </div>
                        <div className="card-body card1 rounded-top-1 rounded-bottom-5">
                            <div className="row">  
                                <h5 className="card-title small-title">Card title.n publishing and graphic  is a ful content. Lorem ipsum may be used as a placeholder before the final co. Card title.n publishing and graphic  is a ful content. </h5> {/* Added small-title class */}
                            </div>
                        </div>
                    </div>
                </div>

                
                    
                <div className="col-lg-4 ">
                    <div className="card mb-3 card1 text-light position-relative crd rounded-5">
                        <div className="position-relative">
                            <img src={card1} className="card-img-top image rounded-top-5 opacity-75" alt="ConnexIT Logo" style={{ width: '100%', height: 'auto' }} /> {/* Adjusted image size */}
                            {/* Position the Link component at the center of the image */}
                            <div className="centered">
                            <Link to="http://localhost:3000/" className="fa-solid fa-play playicon" ></Link>

                            </div>
                        </div>
                        <div className="card-body card1 rounded-top-1 rounded-bottom-5">
                            <div className="row">  
                                <h5 className="card-title small-title">Card title.n publishing and graphic  is a ful content. Lorem ipsum may be used as a placeholder before the final co. Card title.n publishing and graphic  is a ful content. </h5> {/* Added small-title class */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 ">
                    <div className="card mb-3 card1 text-light position-relative crd rounded-5">
                        <div className="position-relative">
                            <img src={card1} className="card-img-top image rounded-top-5 opacity-75" alt="ConnexIT Logo" style={{ width: '100%', height: 'auto' }} /> {/* Adjusted image size */}
                            {/* Position the Link component at the center of the image */}
                            <div className="centered">
                            <Link to="http://localhost:3000/" className="fa-solid fa-play playicon" ></Link>

                            </div>
                        </div>
                        <div className="card-body card1 rounded-top-1 rounded-bottom-5">
                            <div className="row">  
                                <h5 className="card-title small-title">Card title.n publishing and graphic  is a ful content. Lorem ipsum may be used as a placeholder before the final co. Card title.n publishing and graphic  is a ful content. </h5> {/* Added small-title class */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 ">
                    <div className="card mb-3 card1 text-light position-relative crd rounded-5 ">
                        <div className="position-relative">
                            <img src={card1} className="card-img-top image rounded-top-5 opacity-75" alt="ConnexIT Logo" style={{ width: '100%', height: 'auto' }} /> {/* Adjusted image size */}
                            {/* Position the Link component at the center of the image */}
                            <div className="centered">
                            <Link to="http://localhost:3000/" className="fa-solid fa-play playicon" ></Link>

                            </div>
                        </div>
                        <div className="card-body card1 rounded-top-1 rounded-bottom-5">
                            <div className="row">  
                                <h5 className="card-title small-title">Card title.n publishing and graphic  is a ful content. Lorem ipsum may be used as a placeholder before the final co. Card title.n publishing and graphic  is a ful content. </h5> {/* Added small-title class */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 ">
                    <div className="card mb-3 card1 text-light position-relative crd rounded-5">
                        <div className="position-relative">
                            <img src={card1} className="card-img-top image rounded-top-5 opacity-75" alt="ConnexIT Logo" style={{ width: '100%', height: 'auto' }} /> {/* Adjusted image size */}
                            {/* Position the Link component at the center of the image */}
                            <div className="centered">
                            <Link to="http://localhost:3000/" className="fa-solid fa-play playicon" ></Link>

                            </div>
                        </div>
                        <div className="card-body card1 rounded-top-1 rounded-bottom-5">
                            <div className="row">  
                                <h5 className="card-title small-title">Card title.n publishing and graphic  is a ful content. Lorem ipsum may be used as a placeholder before the final co. Card title.n publishing and graphic  is a ful content. </h5> {/* Added small-title class */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            

            


            
        </div>



    );
}

export default Events;
