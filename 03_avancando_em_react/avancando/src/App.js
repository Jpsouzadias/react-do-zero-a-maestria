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

  const cars= [
    { id: 1, brand: "Ferrari", color: "Vermelha", newCar: true, km: 0 },
    { id: 2, brand: "Audi", color: "Preto", newCar: false, km: 3590 },
    { id: 3, brand: "Porsche", color: "Azul", newCar: false, km: 234 }
  ]

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
      <CardDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* reaproveitando */}
      <CardDetails brand="Ford" color="Vemelhar" km={0} newCar={true}/>
      <CardDetails brand="Fiat" color="Branco" km={4500} newCar={false}/>
      {/*  loop em array de objetos */}
      {cars.map((car) => (
        <CardDetails 
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar} 
        />
      ))}
    </div>
  );
}

export default App;
