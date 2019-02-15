import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron className="Jbuton2">
                    <h2 className="jbuton">Tutoriais com JavaScript</h2>
                    <p>Existem duas maneiras de construir um projeto de software. Uma é fazê-lo tão simples que obviamente não há falhas. A outra é fazê-lo tão complicado que não existem falhas óbvias.</p>
                    <Link to="/about">
                        <Button bsStyle="primary">Novidades</Button>
                    </Link>
                </Jumbotron>


                <Row className="show-grid text-center">
                    <Col xs={10} sm={4} className="person-wrapper">
                        <Image src="assets/person-8.png" circle className="profile-pic" />
                        <h3>Node.Js</h3>
                        <p>Node.js é um interpretador de código JavaScript com o código aberto, focado em migrar o Javascript do lado do cliente para servidores.</p>
                        <Link to="/about">
                            <Button bsStyle="primary">Mais</Button>
                        </Link>

                    </Col>

                    <Col xs={10} sm={4} className="person-wrapper">
                        <Image src="assets/person-7.png" circle className="profile-pic" />
                        <h3>Redux</h3>
                        <p>Traduzido do inglês-Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo. É mais comumente usado com bibliotecas como React ou Angular para construir interfaces com o usuário.</p>
                        <Link to="/about">
                            <Button bsStyle="primary">Mais</Button>
                        </Link>

                    </Col>

                    <Col xs={10} sm={4} className="person-wrapper">
                        <Image src="assets/person-9.png" circle className="profile-pic" />
                        <h3>Angular Js</h3>
                        <p>Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações.</p>
                        <Link to="/about">
                            <Button bsStyle="primary">Mais</Button>
                        </Link>

                    </Col>

                    <Col xs={10} sm={4} className="person-wrapper">
                        <Image src="assets/person-6.png" circle className="profile-pic" />
                        <h3>Bootstrap</h3>
                        <p>Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript.</p>
                        <Link to="/about">
                            <Button bsStyle="primary">Mais</Button>
                        </Link>

                    </Col>

                    <Col xs={10} sm={4} className="person-wrapper">
                        <Image src="assets/person-5.png" circle className="profile-pic" />
                        <h3>Vue Js</h3>
                        <p>Traduzido do inglês-O Vue.js é uma estrutura JavaScript de código aberto para criar interfaces com o usuário e aplicativos de página única.</p>
                        <Link to="/about">
                            <Button bsStyle="primary">Mais</Button>
                        </Link>

                    </Col>

                    <Col xs={10} sm={4} className="person-wrapper">
                        <Image src="assets/person-4.png" circle className="profile-pic" />
                        <h3>React</h3>
                        <p>O React é uma biblioteca JavaScript de código aberto para criar interfaces de usuário. É mantido pelo Facebook, Instagram e uma comunidade de desenvolvedores individuais e outras empresas.</p>
                        <Link to="/about">
                            <Button bsStyle="primary">Mais</Button>
                        </Link>

                    </Col>


                </Row>

          
                
             




                <div className="container-fluid ">
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



            </Grid>







        )
    }
}