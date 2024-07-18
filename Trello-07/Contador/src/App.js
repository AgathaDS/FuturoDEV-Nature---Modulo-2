import React from 'react';
import Contador from './components/Contador';
import ListaInput from './components/ListaInput';
import Formulario from './components/Formulario';
import InputControlado from './components/InputControlado';
import './App.css'; // Mantendo o estilo existente

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu Projeto React</h1>
        <Contador />
        <ListaInput />
        <Formulario />
        <InputControlado />
      </header>
    </div>
  );
}

export default App;
