import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component{
    render(){
        return(
           <Navbar className="navbar navbar-default navbar-fixed-top">
                <Navbar.Header>
                    <Navbar.Brand>
                         <Link className="logo" to="/"></Link>
                    
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                        Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/novidades" to="/novidades">
                        Novidades
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                        Noticias
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/assinar" to="/assinar">
                        Assinar
                        </NavItem>
                        <NavItem eventKey={6} componentClass={Link} href="/consultar" to="/consultar">
                        Consulta
                        </NavItem>
                        <NavItem eventKey={5} componentClass={Link} href="/react1" to="/react1">
                        React
                        </NavItem>
                        <NavItem eventKey={5} componentClass={Link} href="/login" to="/login">
                        Login
                        </NavItem>

                       

                      

                    </Nav>


                </Navbar.Collapse>

           </Navbar>
        )
    }
}