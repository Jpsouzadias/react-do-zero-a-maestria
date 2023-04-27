import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ShowUserName from './components/ShowUserName';
import CardDetails from './components/CardDetails';
import ConditionalRender from './components/ConditionalRender';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  /* const name = "Pedro"; */
  const [userName] = useState("Maria")

  const cars= [
    { id: 1, brand: "Ferrari", color: "Vermelha", newCar: true, km: 0 },
    { id: 2, brand: "Audi", color: "Preto", newCar: false, km: 3590 },
    { id: 3, brand: "Porsche", color: "Azul", newCar: false, km: 234 }
  ]

  function ShowMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const HandleMessage = (msg) => {
    setMessage(msg);
  }

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
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar} 
        />
      ))}
      {/* Fragment */}
      <Fragment propFragment="teste" />
      {/* Children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>E este é o conteúdo</h5>
      </Container>
      {/* executar função */}
      < ExecuteFunction myFunction={ShowMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={HandleMessage}/>
    </div>
  );
}

export default App;
