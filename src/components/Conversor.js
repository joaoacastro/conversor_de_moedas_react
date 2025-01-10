import React, { Component } from "react";
import "./Conversor.css";
import Menu from "./pages/Menu";

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA: "BRL",
      moedaB: "USD",
      valor: "",
      resultado: 0,
    };

    this.converter = this.converter.bind(this);
  }

  converter() {
    const { moedaA, moedaB, valor } = this.state;

    // Mapear os símbolos das moedas
    const simbolos = {
      USD: "US$",
      BRL: "R$",
      EUR: "€",
      GBP: "£",
      JPY: "¥",
      CAD: "CA$",
      AUD: "AU$",
      // Adicione mais moedas se necessário
    };

    const url = `https://data.fixer.io/api/latest?access_key=c625dc475966375de523f74c24f0a71c&symbols=${moedaA},${moedaB}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          const taxaMoedaA = json.rates[moedaA];
          const taxaMoedaB = json.rates[moedaB];

          if (taxaMoedaA && taxaMoedaB) {
            // Cálculo da conversão manual
            const cotacao = taxaMoedaB / taxaMoedaA;
            const resultado = (parseFloat(valor) * cotacao).toFixed(2);

            // Pegar o símbolo da moedaB
            const simbolo = simbolos[moedaB] || ""; // Default vazio se símbolo não encontrado

            this.setState({ resultado: `${simbolo} ${resultado}` });

            // Mostrar o resultado
            const classeResultado =
              document.getElementsByClassName("resultado")[0];
            classeResultado.style.display = "flex";
          } else {
            alert("Erro ao obter cotação. Moedas inválidas.");
          }
        } else {
          alert("Erro na API. Tente novamente mais tarde.");
        }
      })
      .catch(() => {
        alert("Erro na requisição. Tente novamente mais tarde.");
      });
  }

  render() {
    const moedasDisponiveis = [
      { codigo: "USD", nome: "Dólar Americano" },
      { codigo: "BRL", nome: "Real Brasileiro" },
      { codigo: "EUR", nome: "Euro" },
      { codigo: "GBP", nome: "Libra Esterlina" },
      { codigo: "JPY", nome: "Iene Japonês" },
      { codigo: "CAD", nome: "Dólar Canadense" },
      { codigo: "AUD", nome: "Dólar Australiano" },
    ];

    return (
      <div>
        <Menu />
        <main className="conversor">
          <a
            href="https://github.com/joaoacastro"
            target="_blank"
            rel="noreferrer"
          >
            <h1>- Conversor de Moedas -</h1>
          </a>
          <div className="inputsContainer">
            <div className="inputs">
              <div className="from">
                <label>De:</label>
                <select
                  value={this.state.moedaA}
                  onChange={(e) => this.setState({ moedaA: e.target.value })}
                >
                  {moedasDisponiveis.map((moeda) => (
                    <option key={moeda.codigo} value={moeda.codigo}>
                      {moeda.nome}
                    </option>
                  ))}
                </select>
              </div>
              <div className="to">
                <label>Para:</label>
                <select
                  value={this.state.moedaB}
                  onChange={(e) => this.setState({ moedaB: e.target.value })}
                >
                  {moedasDisponiveis.map((moeda) => (
                    <option key={moeda.codigo} value={moeda.codigo}>
                      {moeda.nome}
                    </option>
                  ))}
                </select>
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
          <h3 className="resultado" style={{ display: "none" }}>
            Resultado: {this.state.resultado}
          </h3>
        </main>
      </div>
    );
  }
}
