import React, { Component } from 'react';
import { ContentEducation } from '../home04/education/index';

class Education extends Component {
    render() {
        return (
            <section className="flat-education s3 position-relative" id="resume">
                <div className="container">
                    <div className="flat-title t2 animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                        <h4 className="sub-title mg-b13">Formacion de Nuestra Fundadora &amp; CEO <br/> <span>Tilcia </span></h4>

                        <h2 className="title-section color-d11">Educacion &amp; Experiencia</h2>
                    </div>
                    <ContentEducation />
                </div>
            </section>
        );
    }
}

export default Education;
