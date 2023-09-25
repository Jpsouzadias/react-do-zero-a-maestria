import React from 'react';

// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6 - useState
import State from './components/State';

function App() {

  // 1 - variáveis
  const name: string = "João";
  const age: number = 21
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Está trabalhando!</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent key={null} type={''} props={undefined} />
      <SecondComponent name='João' />
      <Destructuring
        title="Primero Post"
        content="Algum conteúdo interessante"
        commentsQty={23}
        tags={["ts", "js"]}
        category={Category.JS}
      />
      <Destructuring
        title="Segundo Post"
        content="Mais um conteúdo"
        commentsQty={73}
        tags={["html", "css"]}
        category={Category.H}
      />
      <State />
    </div>
  );
}

export default App;
