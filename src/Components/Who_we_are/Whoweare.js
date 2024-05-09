import './Whoweare.css'

function WhoweareSection() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="row gy-3">
            <div className="row gy-3">
                <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr/></div>
                <div className="col-4" data-aos="fade-up" data-aos-delay="100"><h3 id='whoweareText'>Who we are</h3></div>
                <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr/></div>
            </div>

            <div className="row gy-3">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/img/about-img.svg" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="about-content ps-0 ps-lg-3">
              <h3></h3>
              <p className="fst-italic"></p>
              <ul>
                <li>
                  <i className="bi bi-flag-fill"></i>
                  <div>
                    <h4>Our Vision</h4>
                    <p style={{ color: 'white' }}>inspiring innovation and connectivity in every corner of the world."</p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-award-fill"></i>
                  <div>
                    <h4>Our Mission</h4>
                    <p style={{ color: 'white' }}>We are dedicated to fostering collaboration, harnessing technology, and empowering communities to thrive in an ever-evolving global landscape.</p>
                  </div>
                </li>
              </ul>
              <p style={{ textAlign: 'justify', color: 'white' }}>
                we're driven by a bold vision: inspiring innovation and connectivity in every corner of the world. Our mission is clear – to foster collaboration, harness technology, and empower communities to thrive in an ever-evolving global landscape. Through our dedication to innovation and connectivity, we're shaping a brighter future for all.
              </p>
            </div>
          </div>

            </div>

            
          
        </div>
      </div>
    </section>
  );
}

export default WhoweareSection;
