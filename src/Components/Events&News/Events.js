import React from 'react';
import './Events.css';
import card1 from '../../images/ConnexIT.png'; // Assuming card1 is the variable holding the image import

const Events = () => {
    return (
        <div className="container">
             {/* //first event row */}
            <div className="row">  
                <div className="col-md-6 col-lg-3 cd-1">
                    <div className="card mb-3 card1">
                        <img src={card1} className="card-img-top" alt="ConnexIT Logo" />
                        <div className="card-body card1">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="btn btn-primary button">See more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Events;
