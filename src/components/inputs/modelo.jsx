import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/context';
import { apiAnos, apiMarca, apiModelos } from '../../services/apiFipe';

function updateState(event, stateFunc, option) {
  let codigo = option.find((opt) => opt.nome === event.target.value);
  if (codigo) codigo = codigo.codigo;
  stateFunc((state) => ({ ...state, value: event.target.value, codigo }));
}

export default function Modelo() {
  const { tipo, marca, modelo, setModelo, modeloOption, setAno, setAnoOption } = useContext(
    Context
  );
  useEffect(() => {
    if (modelo.value === '') {
      setAno({ ...modelo, value: '' });
      setAnoOption(null);
      return null;
    }
    apiAnos(tipo.value, marca.codigo, modelo.codigo).then((e) => {
      setAnoOption(e);
    });
  }, [modelo]);
  if (!modeloOption) return null;
  return (
    <div>
      <label htmlFor="modelo"> Modelo: </label>
      <select
        name="modelo"
        id="modelo"
        onChange={(e) => {
          setAnoOption(null);
          updateState(e, setModelo, modeloOption);
        }}
      >
        <option value="" selected disabled hidden>
          Selecione um modelo
        </option>
        {modeloOption.map((e) => (
          <option value={e.nome} key={e.codigo}>
            {e.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
