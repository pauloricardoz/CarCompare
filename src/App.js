import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Card from './components/cards/card';
import ChartAuto from './components/Chart/chart';
import Selections from './components/selections';
import Context from './context/context';
import ListFavorities from './components/list';
import ContainerTable from './components/compare/tableContainer';
import Header from './components/Header';
import ExistAlert from './components/inputs/existAlert';
import ButtomShow from './components/buttomList';
import { apiAnos, apiValor } from './services/apiFipe';

let state = {
  labels: [],
  datasets: [
    {
      label: 'Valor',
      fill: true,
      lineTension: 0.5,
      backgroundColor: 'rgba(0,123,255,0.5)',
      borderColor: 'rgba(0,123,255,0.5)',
      borderWidth: 2,
      data: [],
    },
  ],
};

function convertMoney(money) {
  if (!money) return null;
  return 1 * money.replace(/R\$ /, '').replace(/\./g, '').replace(/,/, `.`);
}

function App() {
  const {
    tipo,
    marca,
    modelo,
    ano,
    valor,
    autos,
    setAutos,
    exist,
    setExist,
    showTable,
    setShowTable,
    showList,
    setShowList,
    anosToChart,
    setAnosToChart,
    valoresChart,
    setValoresChart,
  } = useContext(Context);
  const saved = localStorage.getItem('autos');
  useEffect(() => {
    if (saved) setAutos(JSON.parse(saved));
  }, []);
  useEffect(() => {
    if (exist) {
      setTimeout(() => setExist(false), 2000);
    }
  }, [exist]);
  useEffect(() => localStorage.setItem('autos', JSON.stringify(autos)), [autos]);
  useEffect(() => {
    console.log(valor);
    if (!valor) return null;
    apiAnos(tipo.value, marca.codigo, modelo.codigo).then((e) => {
      const allProms = e.map((cadaAno) =>
        apiValor(tipo.value, marca.codigo, modelo.codigo, cadaAno.codigo)
      );
      Promise.all(allProms).then((proms) =>
        setValoresChart(
          proms
            ? proms
                .sort((a, b) => a.AnoModelo - b.AnoModelo)
                .map((prom) => ({ Valor: prom.Valor, AnoModelo: prom.AnoModelo }))
            : []

          /* {
            AnoModelo: proms.map((prom) => prom.AnoModelo),
            Valor: proms.map((prom) => convertMoney(prom.Valor)),
            combinado: proms.map((prom) => `${prom.AnoModelo}....${convertMoney(prom.Valor)}`),
          } */
        )
      );
      // .then(() =>
      //   setValoresChart((s) =>
      //     s.combinado
      //       .sort((a, b) => a.match(/(.*)\.\.\.\..*/) - b.match(/(.*)\.\.\.\..*/))
      //       .map((p) => ({
      //         AnoModelo: p.match(/(.*)\.\.\.\..*/),
      //         Valor: p.match(/.*\.\.\.\.(.*)/),
      //       }))
      //   )
      // );
    });
  }, [valor]);

  let valores = null;
  if (valor) valores = [valor];
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Selections />
        {valor ? (
          <div className="localizado">
            <Card data={valor} />
            <ChartAuto state={valoresChart} />
          </div>
        ) : null}
        <ExistAlert />
        <ButtomShow
          show={showList}
          setShow={setShowList}
          text={{ show: 'Ver Favoritos', hide: 'Ocutar Favoritos' }}
        />
        <ListFavorities />
        <ButtomShow
          show={showTable}
          setShow={setShowTable}
          text={{ show: 'Ver Tabela', hide: 'Ocutar Tabela' }}
        />
        {showTable ? <ContainerTable /> : null}
      </div>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
