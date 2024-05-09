import './Topbar.css';

const Topbar = () => {

    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope d-flex align-items-center">
                        <a href="mailto:shenalperera246@gmail.com">sampleemail@gmail.com</a>
                    </i>
                    <i className="bi bi-phone d-flex align-items-center ms-4"><span>011 2254877</span></i>
                </div>
                <div className="social-links d-flex d-md-flex align-items-center">
                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </section>
    );

}

export default Topbar;