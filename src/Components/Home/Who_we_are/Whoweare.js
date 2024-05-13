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
            <div className="col-lg-6 techcontainer " data-aos="fade-up" data-aos-delay="100">

              <div className='row gy-3'>
                <div className='col-2'></div>
                <div className='col-lg-4 welogos'>
                  <div className='row'><img src={Dis} className='techimage' /></div>
                  <div className='row'><p className='techText'>Distribution</p></div>
                </div>
                <div className='col-lg-4 welogos'>
                  <div className='row'><img src={Con} className='techimage' /></div>
                  <div className='row'><p className='techText'>Consultancy</p></div>
                </div>
              </div>

              <div className='row gy-3'>
                <div className='col-2'></div>
                <div className='col-lg-4 welogos'>
                  <div className='row'><img src={Tra} className='techimage' /></div>
                  <div className='row'><p className='techText'>Training</p></div>
                </div>
                <div className='col-lg-4 welogos'>
                  <div className='row'><img src={Tac} className='techimage' /></div>
                  <div className='row'><p className='techText'>TAC Support</p></div>
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

      
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}

export default WhoweareSection;
