import './Whoweare.css'

import Dis from '../../../images/tech/Distributer.png';
import Con from '../../../images/tech/Consultancy.png';
import Tra from '../../../images/tech/Training.png';
import Tac from '../../../images/tech/TAC.png';

function WhoweareSection() {
  return (
    <section id="about" className="section about">
      <div className="container conwh">

        <div className="row gy-3">
          <div className="row gy-3">
            <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
            <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='whoweareText'>Who we are</p></div>
            <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
          </div>

          <div className="row gy-3">
            <div className="col-lg-6 techcontainer" data-aos="fade-up" data-aos-delay="100">

              <div className='row gy-3'>
                <div className='col-lg-5 welogos'>
                  <img src={Dis} className='techimage' />
                </div>
                <div className='col-lg-5 welogos'>
                  <img src={Con} className='techimage'/>
                </div>
              </div>

              <div className='row gy-3'>
                <div className='col-lg-5 welogos'>
                  <img src={Tra} className='techimage'/>
                </div>
                <div className='col-lg-5 welogos'>
                  <img src={Tac} className='techimage'/>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">

              <div className="row" id='whText'>
                <p >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literatum passage,literature, discovered the undoubtable source.</p>
              </div>


              <div className="row">hjdfghj</div>

            </div>

          </div>



        </div>
      </div>
    </section>
  );
}

export default WhoweareSection;
