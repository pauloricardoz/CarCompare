import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Card from './components/cards/card';
import Cards from './components/cards/cards';
import Selections from './components/selections';
import Context from './context/context';
import ListFavorities from './components/list';
import ContainerTable from './components/compare/tableContainer';
import Header from './components/Header';
import ExistAlert from './components/inputs/existAlert';
import ButtomShow from './components/buttomList';

function App() {
  const { valor, autos, setAutos, exist, setExist, showTable, setShowTable, showList, setShowList } = useContext(Context);
  const saved = localStorage.getItem('autos');
  useEffect(() => { if (saved) setAutos(JSON.parse(saved)) }, []);
  useEffect(() => { if (exist) { setTimeout(() => setExist(false), 2000); } }, [exist]);
  useEffect(() => {
    localStorage.setItem('autos', JSON.stringify(autos));
  }, [autos]);
  let valores = null;
  if (valor) valores = [valor];
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Selections />
        <div className="localizado">{valor ? <Card data={valor} /> : null}</div>
        <ExistAlert />
        <ButtomShow show={showList} setShow={setShowList} text={{ show: 'Ver Favoritos', hide: 'Ocutar Favoritos' }} />
        <ListFavorities />
        <ButtomShow show={showTable} setShow={setShowTable} text={{ show: 'Ver Tabela', hide: 'Ocutar Tabela' }} />
        {showTable ? (
          <ContainerTable />) : null}
      </div>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
