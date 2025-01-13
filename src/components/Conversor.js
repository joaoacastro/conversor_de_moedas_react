import React, { useState } from "react";
import "./Conversor.css";

const Conversor = () => {
  const [moedaA, setMoedaA] = useState("BRL"); // Moeda inicial A
  const [moedaB, setMoedaB] = useState("USD"); // Moeda inicial B
  const [valor, setValor] = useState(""); // Valor a ser convertido
  const [resultado, setResultado] = useState(null); // Resultado da conversão

  const converter = async () => {
    if (!valor) return; // Evita conversões sem valor
    const url = `https://api.exchangerate-api.com/v4/latest/${moedaA}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const taxa = data.rates[moedaB];
      setResultado((valor * taxa).toFixed(2));
    } catch (error) {
      console.error("Erro ao buscar taxa de câmbio:", error);
    }
  };

  const inverterMoedas = () => {
    const moedaTemp = moedaA;
    setMoedaA(moedaB);
    setMoedaB(moedaTemp);
    setResultado(null); // Limpa o resultado após inverter
  };

  // Função para detectar a tecla Enter e chamar o converter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      converter();
    }
  };

  // Função para formatar os valores com o símbolo da moeda
  const formatarValor = (valor, moeda) => {
    const opcoes = { style: "currency", currency: moeda };
    return new Intl.NumberFormat("pt-BR", opcoes).format(valor);
  };

  return (
    <div className="conversor-container">
      <div className="input-container">
        <div className="moedas-container">
          <select value={moedaA} onChange={(e) => setMoedaA(e.target.value)}>
            <option value="BRL">BRL</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="GBP">GBP</option>
          </select>

          <button onClick={inverterMoedas} className="inverter-btn">
          <img src="/images/ico_cima_baixo.png" alt="Inverter Moedas" />
          </button>

          <select value={moedaB} onChange={(e) => setMoedaB(e.target.value)}>
            <option value="BRL">BRL</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <input
          className="input-value"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Digite o valor"
          onKeyDown={handleKeyPress} // Adicionando o evento de tecla pressionada
        />
      </div>
      <button onClick={converter} className="converter-btn">
        Converter
      </button>
      {resultado && (
        <h3>
          {formatarValor(valor, moedaA)} é equivalente a{" "}
          {formatarValor(resultado, moedaB)}
        </h3>
      )}
    </div>
  );
};

export default Conversor;
