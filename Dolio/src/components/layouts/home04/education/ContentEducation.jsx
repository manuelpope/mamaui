import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class TopEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contenttop : [
                {
                    id: 1,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.3s',
                    year: '1980',
                    title: 'Contador Publico',
                    text: 'Universidad Francisco de Paula Santader - Cucuta'
                },
                {
                    id: 2,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.5s',
                    year: '1996',
                    title: 'Especialista en Auditoria -Auditor',
                    text: 'Universidad Santo Tomas - Bucaramanga'
                },
                {
                    id: 3,
                    classname: 'experience-box t3',
                    datawow: '0.7s',
                    year: '2014',
                    title: 'Especialista en Planeacion Tributaria',
                    text: 'Universidad UNAB - Bucaramanga'
                }
            ],
            contentbot : [
                {
                    id: 1,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.8s',
                    year: '1987 - 1993',
                    title: 'Contador Publico',
                    office: 'Viviendas y Valores',
                    text: 'Analista Contable'
                },
                {
                    id: 2,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '1s',
                    year: '1993 - Actualidad',
                    title: 'Auditor',
                    office: 'Viviandas y Valores',
                    text: 'Auditoria Financiera y Asesoria Fiscal'
                },
                {
                    id: 3,
                    classname: 'experience-box t3',
                    datawow: '1.2s',
                    year: '2000 - Actualidad',
                    title: 'Revisor Fiscal',
                    office: 'Ceramica Italia',
                    text: 'Asesoria y Gestion Fiscal Empresarial'
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="animate-element delay5 fadeInUp">
                <div className="padding-bottom">
                    <div className="row">
                        {
                            this.state.contenttop.map(data => (
                                <div className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn" data-wow-delay={data.datawow} key={data.id}>
                                    <div className={data.classname}>
                                        <div className="box-inner">
                                        <h3 className="f-info bg-s2 color-d6">{data.year}</h3>
                                        <div className="exp-wrap">
                                            <div className="s-info color-d11 mg-b11">{data.title}</div>
                                            <p className="color-d13">
                                            {data.text}
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.contentbot.map(data => (
                            <div className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn" data-wow-delay={data.datawow} key={data.id}>
                                <div className={data.classname}>
                                    <div className="box-inner">
                                    <h3 className="f-info bg-s2 color-d6">{data.year}</h3>
                                    <div className="exp-wrap">
                                        <div className="s-info color-d11 mg-b11">{data.title} <Link to="#">{data.office}</Link></div>
                                        <p className="color-d13">
                                            {data.text} 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default TopEducation;
