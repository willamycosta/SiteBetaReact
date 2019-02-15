import React, { Component } from 'react';
import './Consultar.css';

export default class Consultar extends Component{
  render(){
      return(

        <div className="Consulta1">
            <h1>Consulat de Dados!</h1>
            <form className="Consulta2">
            <for className="Entrada">
                <label for="exempleImputEmail">Entre com dados:</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Entre com Nome"/>
               
                <label for="exempleImputEmail">Entre Data de Nascimento:</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Nascimento"/>
               <br/>
                <label for="exempleImputEmail">Email:</label>
                <br/>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Email"/>
               
                <label for="exempleImputEmail">Informe o seu CEP:</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Cep"/>
                <br/>
                <label for="exempleImputEmail">Endereço:</label>
                <br/>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Bairro"/>
                
                <div className="input-group">
                    <input type="button" className="btn btn-secondary" value="Gravar"/>
                </div>
                
            </for>
            </form>

        </div>


      );
  }
}