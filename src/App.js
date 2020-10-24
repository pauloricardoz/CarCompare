import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Card from './components/cards/card';
import Cards from './components/cards/cards';
import Selections from './components/selections';
import Context from './context/context';
import { Alert, Button } from 'react-bootstrap';
import ButtomList from './components/buttomList';
import Table from './components/compare/table';
import ListFavorities from './components/list';
import ButtomTabela from './components/buttomTable';
import OrderToMe from './components/compare/orderMe';
import NameSearch from './components/compare/SearchName';
import Procurar from './components/compare/searchMe';

function App() {
  const { valor, autos, setAutos, exist, setExist } = useContext(Context);
  const [showList, setShowList] = useState(false);
  const saved = localStorage.getItem('autos');
  useEffect(() => {
    if (saved) {
      setAutos(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
    if (exist) {
      setTimeout(() => setExist(false), 2000);
    }
  }, [exist]);
  let valores = null;
  if (valor) valores = [valor];
  return (
    <div className="App">
      <header className="header">
        <h1>Comparação de carros na tabela FIPE</h1>
      </header>
      <div className="main">
        <Selections />
        <div className="localizado">{valor ? <Card data={valor} /> : null}</div>
        {exist ? (
          <Alert className="exist" variant={'danger'}>
            Já existe!
          </Alert>
        ) : null}
        <ButtomList />
        <ListFavorities />
        <ButtomTabela />
        <div>
          <Procurar />
        </div>
        <div className="table">
          <Table />
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
