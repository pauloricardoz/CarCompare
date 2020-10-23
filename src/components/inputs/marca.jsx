import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/context';
import { apiModelos } from '../../services/apiFipe';
import { updateState } from '../../services/comumFunctions';

export default function Marca() {
  const { tipo, marca, setMarca, marcaOption, modelo, setModelo, setModeloOption } = useContext(
    Context
  );
  useEffect(() => {
    if (!marcaOption) return null;
  }, [marcaOption]);
  useEffect(
    async() => {
      
      if (marca.value === '') {
        await setModelo({ ...modelo, value: '' });
        await setModeloOption(null);
        return null;
      }
      apiModelos(tipo.value, marca.codigo).then((e) => setModeloOption(e.modelos));
      return ()=>{
        setModelo({ ...modelo, value: '' });
        setModeloOption(null);
        setMarca(s=>({...s,value:''}))}
    },
    [marca]
  );
  if (!marcaOption) return null;
  return (
    <div className="inputs">
      <label htmlFor="marca"> Marcas: </label>
      <select
        name="marca"
        id="marca"
        onChange={(e) => {
          setModeloOption(null);
          updateState(e, setMarca, marcaOption);
        }}
      >
        <option value="" selected disabled hidden>
          Selecione uma marca
        </option>
        {marcaOption.map((e) => (
          <option value={e.nome} key={e.nome}>
            {e.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
