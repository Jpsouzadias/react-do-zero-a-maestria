import React, { createContext } from 'react';

// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6 - useState
import State from './components/State';

// 10 - utilizando context
import Context from './components/Context';

// 8 - type
type textOrNull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  // 1 - variáveis
  const name: string = "João";
  const age: number = 21
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 8 - null
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  /*   mySecondText = "opa"; */

  const testandoFixed: fixed = "Isso";

  // 9 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };


  return (
    <AppContext.Provider value={contextValue}>
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
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
