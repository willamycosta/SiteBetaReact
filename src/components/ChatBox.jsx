import React, { Component } from 'react';
import './CatBox.css';
import './ScriptChat.js';

class App extends React.Component {
    
    render() {
        return (


            <form className="form">

             

                <div class="form-group">
                    <label for="exampleInputEmail1">Endereço de email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
                    <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Senha</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Salvar dados</label>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
                    
                <div className="container-fluid">
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

                
                
            </form>

        );
    }
}
export default App;