import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/context';
import { apiAnos, apiMarca, apiModelos, apiValor } from '../../services/apiFipe';

function updateState(event, stateFunc) {
  stateFunc((state) => event.target.value);
}

export default function Ano() {
  const {
    tipo,
    marca,
    modelo,
    ano,
    setAno,
    anoOption,
    setValor,
  } = useContext(Context);
  useEffect(() => {
    if (ano.value === '') {
      setValor(null);
      return null;
    }
    apiValor(tipo.value, marca.codigo, modelo.codigo, ano).then((e) => {
      setValor(e);
    });
  }, [ano]);
  if (!anoOption) return null;
  return (
    <div>
      <label htmlFor="ano"> Ano: </label>
      <select name="ano" id="ano" onChange={(e) => updateState(e, setAno)}>
        <option value="" selected disabled hidden>Selecione um ano</option>
        {anoOption.map((e) => (
          <option value={e.codigo} key={e.codigo}>
            {e.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
