import './Hero.css';

function HeroSection() {
  return (
    <section id="hero" className="section hero">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h3>Leading Technology Distributor</h3>
            <h1>Welcome to <span className='Connexcon'>Con</span><span className='Connexnex'>nex</span> Information Technologies</h1>
            <p>Value added distributor for more than 30 leading global vendors.</p>
            <div className="d-flex">
              <a href="#" className="btn-get-started">Contact Us</a>
              <a href="" className="glightbox btn-watch-video d-flex align-items-center">
                <i className="bi bi-play-circle"></i><span>Watch Video</span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 order-1 order-lg-2 hero-img">
            <img src="assets/images/heropng.png" className="img-fluid animated" style={{ width: '100%' }} alt="" />
          </div>
          <div className="col-lg-6 order-1 order-lg-2 space"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
