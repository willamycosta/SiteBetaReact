import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';


export default class News extends Component{
    render(){
        return(
            <div className="novidade">
                    <Image src="assets/mountain-man.jpg" className="header-image"/>
                    <Grid>
                    <h2 className="Nov">Novidades</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>altitudes quando comparadas a outros tipos de superfícies, sendo então, Comumente as montanhas são formadas pela ação das placas tectônicas, que</p>
                            <p>paisagem acidentada e normalmente apresentam vales profundos, locali Comumente as montanhas são formadas pela ação das placas tectônicas, que</p>
                            <p>Para a Geologia (ciência que estuda a crosta terrestre), montanhas Comumente as montanhas são formadas pela ação das placas tectônicas, que</p>
                            <p>extensas e altas, as montanhas formam as chamadas cordilheiras ou cad Comumente as montanhas são formadas pela ação das placas tectônicas, que.</p>
                            <p>A Geologia considera que as montanhas são formações recentes, e modifica Comumente as montanhas são formadas pela ação das placas tectônicas, que.</p>
                            <p>Comumente as montanhas são formadas pela ação das placas tectônicas, que.</p>
                        </Col>

                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/dog-people.jpg"/>
                            <p>Montanhas são formas de relevo que se caracterizam por altos do planeta. Possuem encostas íngremes,</p>
                            <p>extensas e altas, as montanhas formam as chamadas cordilheiras ou cad Comumente as montanhas são formadas pela ação das placas tectônicas, que.</p>
                            <p>A Geologia considera que as montanhas são formações recentes, e modifica Comumente as montanhas são formadas pela ação das placas tectônicas, que.</p>
                            <p>Comumente as montanhas são formadas pela ação das placas tectônicas, que.</p>
                        </Col>

                    </Row>

                    </Grid>

                    <div className="container-fluid4">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-xs">
                                <p><span className="glyphicon glyphicon-bishop">Corporações SCod..</span></p>
                            </div>
                            <div className="col-xs">
                                <p>&reg; copyrigt 2019 Canal Willamy Costa</p>
                            </div>
                            <div className="col-xs">
                                <p>Redes sociais: <a href="http://www.facebook.com">Facebook</a> <a href="https://www.youtube.com">You tube</a>  </p>
                            </div>
                        </div>
                     </div>
                </div>

            </div>
        )
    }
}