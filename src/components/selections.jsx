import React, { useContext } from 'react';
import Tipo from './inputs/tipo';
import Marca from './inputs/marca';
import Modelo from './inputs/modelo';
import Ano from './inputs/ano';
import Context from '../context/context';
import { Button } from 'react-bootstrap';

function cleanInput(context) {
  const {
    setMarca,
    setModelo,
    setAno,
    setValor,
    setMarcaOption,
    setModeloOption,
    setAnoOption,
  } = context;
  console.log('Limpa tudo');
  setMarca({ index: 0, value: ''});
  setModelo({ index: 0, value: '' });
  setAno({ index: 0, value: '' });
  setValor(null);
  setMarcaOption(null);
  setModeloOption(null);
  setAnoOption(null);
}

function updateList(autos, setAutos, valor, setExist, context) {
  if (
    autos
      .map((a) => `${a.CodigoFipe}/${a.AnoModelo}`)
      .includes(`${valor.CodigoFipe}/${valor.AnoModelo}`)
  ) {
    setExist(true);
    cleanInput(context);
    return false;
  }
  localStorage.setItem('autos', JSON.stringify([...autos, valor]));
  setAutos((s) => [...s, valor]);
  cleanInput(context);
}
export default function Selections() {
  const context = useContext(Context);
  const { valor, autos, setAutos, setExist } = context;
  let valores = null;
  if (valor) valores = Object.entries(valor);
  return (
    <div className="optionsBar">
      <Tipo />
      <Marca />
      <Modelo />
      <Ano />
      {!valor ? null : (
        <Button
          variant="success"
          onClick={() => updateList(autos, setAutos, valor, setExist, context)}
        >
          Adicionar ao favoritos
        </Button>
      )}
    </div>
  );
}
