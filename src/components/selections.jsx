import React, { useContext, useEffect, useState } from 'react';
import { apiMarca, apiModelos } from '../services/apiFipe';
import Tipo from './inputs/tipo';
import Marca from './inputs/marca';
import Modelo from './inputs/modelo';
import Ano from './inputs/ano';
import Context from '../context/context';


function updateList(autos, setAutos, valor, setExist) {
  console.log('before',autos.map((a) => a.CodigoFipe),valor.CodigoFipe)
  if (autos.map((a) => `${a.CodigoFipe}/${a.AnoModelo}`).includes( `${valor.CodigoFipe}/${valor.AnoModelo}`)) {
    setExist(true)
    return false;
  }
  console.log('after')
  localStorage.setItem('autos', JSON.stringify([...autos, valor]));
  setAutos((s) => [...s, valor]);
}

export default function Selections() {
  const { valor, autos, setAutos, setExist } = useContext(Context);
  let valores = null;
  if (valor) valores = Object.entries(valor);
  return (
    <div className="optionsBar">
      <Tipo />
      <Marca />
      <Modelo />
      <Ano />
      {!valor ? null : (
        <button onClick={() => updateList(autos, setAutos, valor, setExist)}>Comparar</button>
      )}
    </div>
  );
}
