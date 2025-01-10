import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <header className="container">
        <div className="logo">
          <img src="/moeda.png" alt="conversor logo" />
          <span>Conversor de Moedas</span>
        </div>

        <nav className="nav">
          <ul>
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
        </nav>
      </header>
    </div>
  );
};

export default Menu;
