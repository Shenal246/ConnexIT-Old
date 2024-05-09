import './Hero.css';

function HeroSection() {
  return (
    <section id="hero" className="section hero">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 style={{ color: 'rgba(106, 115, 202, 0.986)' }}>Empowering connections,</h1>
            <p>Igniting possibilities, And powering the <br />future through innovation And collaboration.</p>
            <div className="d-flex">
              <a href="index.html#about" className="btn-get-started">Get Started</a>
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center">
                <i className="bi bi-play-circle"></i><span>Watch Video</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="assets/images/heropng.png" className="img-fluid animated" style={{ width: '100%' }} alt="" />
          </div>
          <div className="col-lg-6 order-1 order-lg-2 space"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
