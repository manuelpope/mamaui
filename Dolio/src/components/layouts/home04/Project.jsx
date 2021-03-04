import React, { Component } from 'react';
class Project extends Component {
    render() {
        return (
            <section className="get-project s4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="featured-post animate-element wow delay5 fadeZooming" data-wow-delay="0.5s">
                                <img src="images/section/38.png" alt="images" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-inner animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <h2 className="title mg-b14 color-d11">Nuestra CEO</h2>
                                <h3>Tilcia Bayona Camacho</h3>
                                <div className="site-list has-border">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project;
