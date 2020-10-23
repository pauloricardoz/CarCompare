import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Cards from './components/cards/cards';
import Selections from './components/selections';
import Context from './context/context';

function App() {
  const { valor, autos, setAutos, exist, setExist } = useContext(Context);
  const saved = localStorage.getItem('autos');
  useEffect(() => {
    if (saved) {
      setAutos(JSON.parse(saved));
    }
  }, []);

  let valores = null;
  if (valor) valores = [valor];
  return (
    <div className="App">
      <header className="header">
        <h1>Comparação de carros na tabela FIPE</h1>
      </header>
      <Selections />
      <div id="notExist"></div>
      <div>{!autos ? null : <Cards />}</div>
    </div>
  );
}

export default App;
