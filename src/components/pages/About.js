import React from "react";
import "./About.css";
import MenuComponent from "./MenuComponent";

const About = () => {
  return (
    <div>
      <MenuComponent />
      <div className="about">
        <h1>About</h1>
        <p>
          Me chamo João Antônio, sou desenvolvedor Web Front-End com expertise em HTML, CSS, JavaScript, React, Node.js e integração de APIs.
          Apaixonado por criar interfaces responsivas, intuitivas e focadas na
          experiência do usuário, com forte ênfase em usabilidade e
          acessibilidade.
        </p>

        <p>
          Com uma formação em Produção Audiovisual, trago uma abordagem criativa e orientada a resultados para cada projeto, sempre buscando otimizar a performance e melhorar a interação do usuário. Meu portfólio reflete inovação, boas práticas de código e soluções práticas para desafios do desenvolvimento web, com foco na criação de experiências digitais de alta qualidade e escalabilidade.
        </p>
      </div>
    </div>
  );
};

export default About;
