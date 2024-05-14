import './Latest.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Latest1 from '../../../images/Latest/1.png';

const Latest = () => {

    return (
        <section >
            <div className='container latest'>
                <div className="row gy-3 headingRow">
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='whoweareText'>Latest News</p></div>
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                </div>
                


                <div className="row backgrnd">

                    <div className="col-md-6">
                    {/* first image of the first colum */}
                        <div class=" mb-2">
                            <Card className='cardContainer1'>
                                <Card.Img variant="top" src={Latest1} className='image1' />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Card Title 1</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                    
                    {/* First image of the Second colum */}
                    <div className="col-md-5">
                        <div className='row'>
                            <div class=" mb-2">
                                <Card className='cardContainer2'>
                                    <Card.Img variant="top" src={Latest1} className='image2' />
                                    <Card.Body className='cardBody2'>
                                        <Card.Title>Card Title 2</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>

                        </div>


                        <div class=" mb-2">
                            <div className='row'>
                                <div className="col-md-6">
                                {/* First image of the Second colum second row */}
                                    <div class=" mb-2">
                                        <Card className='cardContainer2'>
                                            <Card.Img variant="top" src={Latest1} className='image2' />
                                            <Card.Body className='cardBody2'>
                                                <Card.Title>Card Title 3</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                {/* Second image of the Second colum second row */}
                                    <div class=" mb-2">
                                        <Card className='cardContainer2'>
                                            <Card.Img variant="top" src={Latest1} className='image2' />
                                            <Card.Body className='cardBody2'>
                                                <Card.Title>Card Title 4</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/*see more button */}
                    <div className="col-md-1">

                        <div class="navigation">
                        <i class="fa-solid fa-chevrons-right arrow" ></i>
                        </div>

                    </div>

                </div>




            </div>

        </section>
    );

}

export default Latest;