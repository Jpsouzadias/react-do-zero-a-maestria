import './App.css';

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';

function App() {
  const name = "Pedro";
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
      <ShowUserName name={userName} />
    </div>
  );
}

export default App;
