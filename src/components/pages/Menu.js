import React from "react";
import { slide as Menu } from "react-burger-menu"; // Importando o componente de menu hambúrguer
import "./Menu.css";

const MenuComponent = () => {
  return (
    <div>
      <header className="container">
        <div className="logo">
          <img src="/moeda.png" alt="conversor logo" />
          <span>Conversor de Moedas</span>
        </div>

        {/* Usando o Menu do react-burger-menu com ajustes */}
        <Menu right noOverlay disableAutoFocus>
          <ul className="lista">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </Menu>
      </header>
    </div>
  );
};

export default MenuComponent;
