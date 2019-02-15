import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component{
    render(){
        return(
            <div>
                    <Image src="assets/React-1.png" className="header-image"/>
                    <Grid>
                        <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/person-4.png" className="about-profile-pic" rounded/>
                        <h3>React Js</h3>
                        <p>O React é uma biblioteca JavaScript de código aberto para criar interfaces de usuário. É mantido pelo Facebook, Instagram e uma comunidade de desenvolvedores individuais e outras empresas.</p>
                        <p>React torna indolor criar UIs interativas. Crie visualizações simples para cada estado em seu aplicativo e o React atualizará e renderizará com eficiência os componentes certos quando os dados forem alterados.</p>
                        </Col>


                    </Grid>

                    <div className="container-fluid3">
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