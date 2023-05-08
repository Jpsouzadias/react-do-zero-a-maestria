import MyForm from './Components/MyForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ 
        name: "João", 
        email: "joao@gmail.com", 
        bio: "Eu sou o Admin.", 
        role: "admin" 
        }}/>
    </div>
  );
}

export default App;
