import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Card from './components/cards/card';
import Cards from './components/cards/cards';
import Selections from './components/selections';
import Context from './context/context';
import {  } from 'react-bootstrap'

function App() {
  const { valor, autos, setAutos, exist, setExist } = useContext(Context);
  const saved = localStorage.getItem('autos');
  useEffect(() => {
    if (saved) {
      setAutos(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
    if (exist) {
      setTimeout(() =>
        setExist(false)
        , 2000);
    }
  }, [exist]);
  let valores = null;
  if (valor) valores = [valor];
  return (
    <div className="App">
      <header className="header">
        <h1>Comparação de carros na tabela FIPE</h1>
      </header>
      <Selections />
      <div className="localizado">
        {valor ? <Card data={valor} /> : null}
      </div>
      {exist ? <strong className="exist">Já existe</strong> : null}
      {!autos ? null : <Cards />}
    </div>
  );
}

export default App;
