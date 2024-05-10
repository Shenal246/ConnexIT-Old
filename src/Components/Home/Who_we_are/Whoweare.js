import './Whoweare.css'

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
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              {/* Put images here */}
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
