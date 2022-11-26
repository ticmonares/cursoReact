import logo from './logo.svg';
import './App.css';
import Titulo from './componets/Titulo';
import SubTitulo from './componets/SubTitulo';
import Texto from './componets/Texto';
import { LengContext } from './componets/LengContext';
import { useState } from 'react';


function App() {

  const [msj, setMensaje] = useState("ES");

  const onClick = () => {
    setMensaje(msj === "ES" ? "EN" : "ES")
  }


  return (
    <div className="App">
      <LengContext.Provider value={msj}>
          <Titulo></Titulo>
          <SubTitulo></SubTitulo>
          <Texto></Texto>
          <button onClick={onClick}>Traducir</button>
      </LengContext.Provider>
      
    </div>
  );
}

export default App;
