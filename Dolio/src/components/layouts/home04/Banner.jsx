import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Banner extends Component {
    render() {
        return (
            <section className="banner-section s4 two-home" id="home">
                <div className="container">
                    <div className="content-text position-relative">
                        <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.3s">
                            <div className="tag color-d1 lt-sp53 mg-b34">Consulturoia Contable y Tributaria</div>
                            <h1 className="cd-headline clip is-full-width title color-d11 mg-b41">
                                <span className="cd-words-wrapper color-d6">
                                <b className="is-visible">Somos Bayona SAS</b>
                                <b>Tus asesores!</b>
                                </span>
                            </h1>
                            <p className="color-d13 lt-sp02 mg-b51">
                                info sobre el grupo , somos un grupo experimentado en asesoria... <br />  Aqui viene gancho comercial 
                            </p>
                        </div>
                        <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                            <div className="fl-btn btn-general color-s2 btn-hv-border">
                                <Link to="#" className="f-w500 color-d6 border-corner5 lt-sp01 text-two">Descargar Brouchete pdf</Link>
                            </div>
                        </div>
                    </div>
                    <div className="featured-post border-corner-bl">
                        <img src="images/section/47.jpg" alt="images" />
                        <div className="site-list has-border text-center animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                            <Link to="#" className="bg-s1"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s2"><i className="fa fa-behance" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s3"><span className="icon-dribble" /></Link>
                        </div>
                    </div>
                </div>
   
            </section>
        );
    }
}

export default Banner;
