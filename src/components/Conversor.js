import React, { Component } from "react";
import "./Conversor.css";

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA: "",
      moedaB: "",
      valor: "",
      resultado: 0,
    };

    this.converter = this.converter.bind(this);
  }

  converter() {
    const { moedaA, moedaB, valor } = this.state;
    // Formar a string para a API
    const query = `${moedaA}_${moedaB}`;
    const url = `https://free.currconv.com/api/v8/convert?q=${query}&compact=ultra&apiKey=b1460e287d696041ccb1`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const cotacao = json[query];
        if (cotacao) {
          const classeResultado = document.getElementsByClassName("resultado");
          classeResultado.style.display = "flex";

          const resultado = (parseFloat(valor) * cotacao).toFixed(2);
          this.setState({ resultado });
        } else {
          alert("Erro ao obter cotação. Tente novamente mais tarde.");
        }
      })
      .catch(() => {
        alert("Erro na requisição. Tente novamente mais tarde.");
      });
  }

  render() {
    return (
      <div className="conversor">
        <h1>- Conversor de Moeda -</h1>
        <div className="inputsContainer">
          <div className="inputs">
            <div className="from">
              <label>De:</label>
              <input
                type="text"
                placeholder="(Ex: BRL)"
                value={this.state.moedaA}
                onChange={(e) => this.setState({ moedaA: e.target.value })}
              />
            </div>
            <div className="to">
              <label>Para:</label>
              <input
                type="text"
                placeholder="(Ex: USD)"
                value={this.state.moedaB}
                onChange={(e) => this.setState({ moedaB: e.target.value })}
              />
            </div>
          </div>

          <br />
          <input
            className="inputValor"
            type="number"
            placeholder="Valor"
            value={this.state.valor}
            onChange={(e) => this.setState({ valor: e.target.value })}
          />
        </div>
        <button type="button" className="button" onClick={this.converter}>
          Converter
        </button>
        <h3 className="resultado">Resultado: {this.state.resultado}</h3>
      </div>
    );
  }
}
