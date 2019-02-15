import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';


export default class Login extends Component {
    render() {
        return (
          <div className="usuario">
            <div class="wrapper fadeInDown">
            <div id="formContent">
              
          
              
              <div class="fadeIn first">
                <img src="http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Places-user-identity-icon.png" id="icon" alt="User Icon" />
              </div>
          
              
              <form>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario"/>
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password"/>
                <input type="submit" class="fadeIn fourth" value="Log In"/>
              </form>
          
              
              <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
              </div>
          
            </div>
          </div>


          <div className="container-fluid1">
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