import React, { useState, useEffect, useRef } from "react";
import { slide as Menu } from "react-burger-menu"; // Importando o componente de menu hambúrguer
import { Link } from "react-router-dom"; // Importando o Link do react-router-dom
import "./MenuComponent.css";

const MenuComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Fecha o menu ao clicar fora
  const handleOutsideClick = (event) => {
    if (
      menuRef.current && // O menu foi renderizado
      !menuRef.current.contains(event.target) // O clique não está no menu
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div ref={menuRef}>
      <header className="container">
        <Link to="/home" className="tituloMenuComponent">
          <div className="logo">
            <img src="/images/moeda.png" alt="conversor logo" />
            <span>Conversor de Moedas</span>
          </div>
        </Link>

        {/* Usando o Menu do react-burger-menu com ajustes */}
        <Menu
          right
          noOverlay
          disableAutoFocus
          isOpen={isMenuOpen}
          onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)} // Sincroniza o estado do menu
        >
          <ul className="lista">
            <li>
              <Link to="/home">Home</Link>
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
