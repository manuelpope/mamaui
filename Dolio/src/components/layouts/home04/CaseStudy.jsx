import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class CaseStudy extends Component {
    render() {
        return (
            <section className="flat-case-study s3" id="portfolio">
                <div className="container">
                    <div className="d-md-flex">
                        <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                            <div className="image-link t2">
                                <div className="featured-post">
                                    <Link to="#"><img src="images/section/52.jpg" alt="images" /></Link>
                                </div>

                            </div>
                            <div className="image-link t2">
                                <div className="featured-post">
                                    <Link to="#"><img src="images/section/53.jpg" alt="images" /></Link>
                                </div>
                            </div>
                        
                        </div>
                        <div className="flat-spacer" data-desktop={0} data-mobile={100} data-smobile={100} />
                            <div className="col-right animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <div className="flat-title t2 mg-b60">
                                    <h4 className="sub-title mg-b13">Portafolio</h4>
                                    <h2 className="title-section color-d11 mg-b20">Algunos de nuestros Proyectos</h2>
                                    <p className="color-d13">
                                   Contamos con Profesionales que constantemente estan en formacion, crecimiento e intachable etica laboral.
                                    </p>
                                </div>
                            <div className="pd-right">
                                <div className="image-link t2">
                                    <div className="featured-post">
                                        <Link to="#"><img src="images/section/54.jpg" alt="images" /></Link>
                                    </div>
                                </div>
                                <div className="image-link t2">
                                    <div className="featured-post">
                                        <Link to="#"><img src="images/section/55.jpg" alt="images" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CaseStudy;
