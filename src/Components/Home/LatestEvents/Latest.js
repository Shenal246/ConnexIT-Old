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
                <div className='row gy-3'>
                    <div className='col-lg-7'>
                        <Card className='cardContainer1'>
                            <Card.Img variant="top" src={Latest1} className='image1' />
                            <Card.Body className='cardBody'>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-xs-1'>
                        <div className='row'>
                            <Card className='cardContainer2'>
                                <Card.Img variant="top" src={Latest1} className='image2' />
                                <Card.Body className='cardBody2'>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='row '>
                            <Card className='cardContainer2'>
                                <Card.Img variant="top" src={Latest1} className='image2' />
                                <Card.Body className='cardBody2'>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className='col-1 navigation'>
                        sdf
                    </div>
                </div>
            </div>

        </section>
    );

}

export default Latest;