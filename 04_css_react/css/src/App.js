/* eslint-disable jsx-a11y/heading-has-content */
import './App.css';
import MyComponent from './components/MyComponent';

import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("João");

  const redTitle = true;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do app.js</p>
      {/* Inline CSS */}
      <p style={{ 
        color: "blue", 
        padding: "25px", 
        borderTop: "10px solid red"
         }}>Este elemento foi estilizado de forma inline</p>
      <p style={{ 
        color: "magenta", 
        padding: "25px", 
        borderTop: "10px solid red"
         }}>Este elemento foi estilizado de forma inline</p>
         {/* CSS Inline dinâmico */}
         <h2 style={n < 10 ? ({color: "purple" }) : ({ color: "pink" })}>CSS dinâmico</h2>
         <h2 style={n > 10 ? ({color: "purple" }) : ({ color: "pink" })}>CSS dinâmico</h2>
         <h2 style={name === "João"
          ? ({color: "green", backgroundColor: "#000" }) 
          :  null 
          }
          >
          Teste nome
          </h2>
          {/* Classe dinâmica */}
          <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter class dinâmica</h2>
          {/*  CSS Modules */}
          <Title />
          <h2 className='my-title'>Testando</h2>
    </div>
  );
}

export default App;
