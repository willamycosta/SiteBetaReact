import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home  from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Login from './components/Login';
import ChatBox from './components/ChatBox';
import Consultar from './components/Consultar';
import Novidades from './components/Novidades';
import React1 from './components/React1';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route  path="/novidades" component={Novidades}/>
          <Route  path="/news" component={News}/>
          <Route path="/login" component={Login}/>
          <Route path="/assinar" component={ChatBox}/>
          <Route path="/consultar" component={Consultar}/>
          <Route path="/react1" component={React1}/>

        </div>

      </Router>
      
    );
  }
}

export default App;
