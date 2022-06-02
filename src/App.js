import React, { Component } from 'react';
import './App.css';
import './AppResponsivo.css';
import Conversor from './components/Conversor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='titulo'>.:Conversor de Moedas:.</h1>
        <div className="index">
          <div className="legendaContainer">
            <div className="legenda">
              <h3 className='legendaTitulo'>Legenda</h3>
              <p>BRL: Real brasileiro</p>
              <p>USD: Dólar Americano</p>
              <p>EUR: Euro</p>
              <p>CAD: Dólar Canadense</p>
              <p>ARS: Peso Argentino</p>
            </div>
          </div>
          
          <div className="conversores">
            <div className="linha">
              <Conversor moedaA="BRL" moedaB="USD"></Conversor>
              <Conversor moedaA="USD" moedaB="BRL"></Conversor>
            </div>
            <div className="linha">
              <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
              <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
            </div>
            <div className="linha">
              <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
              <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
            </div>
            <div className="linha">
              <Conversor moedaA="BRL" moedaB="ARS"></Conversor>
              <Conversor moedaA="ARS" moedaB="BRL"></Conversor>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
