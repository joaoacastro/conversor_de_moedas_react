import React, { useState } from "react";
import "./API.css";
import MenuComponent from "./MenuComponent";

const API = () => {
  return (
    <div>
      <MenuComponent />
      <h1>API</h1>
      <div className="backgroundAPI">
        <p>
          Nosso conversor de moedas utiliza a <a href="https://www.exchangerate-api.com/docs/overview" target="_blank" rel="noopener noreferrer">Exchangerate-API</a>, uma API que fornece taxas de câmbio atualizadas para diversas moedas ao redor do mundo.
        </p>
        <p>
          A API Exchangerate-API coleta e atualiza as taxas de câmbio a partir
          de fontes confiáveis, permitindo a conversão precisa entre diferentes
          moedas. Os dados podem ser acessados por meio de requisições HTTP,
          retornando informações no formato JSON.
        </p>
      </div>
    </div>
  );
};

export default API;
