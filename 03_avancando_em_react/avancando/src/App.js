import './App.css';

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ShowUserName from './components/ShowUserName';
import CardDetails from './components/CardDetails';
import ConditionalRender from './components/ConditionalRender';

import City from './assets/city.jpg';
import { useState } from 'react';

function App() {
  /* const name = "Pedro"; */
  const [userName] = useState("Maria")
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
      <img src="/img1.jpg" alt="Paisagem"/>
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CardDetails brand="VW" km={100000} color="Azul"/>
    </div>
  );
}

export default App;
