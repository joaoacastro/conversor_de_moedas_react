import React from 'react';
import ReactDOM from 'react-dom/client';  // Alterado para 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Usando createRoot() para renderizar a aplicação no React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);  // Alterado para root.render()

// Se você quiser medir o desempenho, use o reportWebVitals
reportWebVitals();
