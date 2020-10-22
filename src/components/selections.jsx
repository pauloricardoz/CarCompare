import React, { useContext, useEffect, useState } from 'react';
import { apiMarca, apiModelos } from '../services/apiFipe';
import Tipo from './inputs/tipo';
import Marca from './inputs/marca';
import Modelo from './inputs/modelo';
import Ano from './inputs/ano';
import Context from '../context/context';

export default function Selections() {
  const { valor } = useContext(Context);
  let valores = null;
  if (valor) valores = Object.entries(valor);
  return (
    <div>
      <Tipo />
      <Marca />
      <Modelo />
      <Ano />
      {!valores ? null : 
      <button>Comparar</button>}
      
    </div>
  );
}
