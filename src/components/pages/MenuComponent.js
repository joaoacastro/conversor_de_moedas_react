import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Menu.css";

const MenuComponent = () => {
  return (
    <div>
      <header className="container">
        <div className="logo">
          <img src="/moeda.png" alt="conversor logo" />
          <span>Conversor de Moedas</span>
        </div>

        <Menu right noOverlay disableAutoFocus>
          <ul className="lista">
            <li>
              {/* Link atualizado para apontar para o caminho correto */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Menu>
      </header>
    </div>
  );
};

export default MenuComponent;
