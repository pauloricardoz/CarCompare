import React, { useEffect, useState } from 'react';
import { apiMarca, apiModelos } from '../services/apiFipe';

const tipoOption = ['carros', 'motos', 'caminhoes'];
export default function Selections() {
  const [tipo, setTipo] = useState({ index: 0, value: '' });
  const [marca, setMarca] = useState({ index: 1, value: '' });
  const [modelo, setModelo] = useState({ index: 2, value: '' });
  const [ano, setAno] = useState({ index: 3, value: '' });
  const [valor, setValor] = useState({ index: 4, value: 0 });
  const [marcaOption, setMarcaOption] = useState([]);
  const [modeloOption, setModeloOption] = useState([]);
  useEffect(() => {
    if (tipo.value === '') {
      setMarca({ ...modelo, value: '' });
      setMarcaOption([]);
      return null;
    }
    apiMarca(tipo.value).then((e) => setMarcaOption(e));
  }, [tipo]);
  useEffect(() => {
    console.log('aquiii', marca);
    if (marca.value === '') {
       setModelo({ ...modelo, value: '' });
       setModeloOption([]);
      return null;
    }
    apiModelos(tipo, marca).then((e) => setModeloOption(e));
  }, [marca]);
  return (
    <div>
      <label htmlFor="tipo">Tipo de veiculo: </label>
      <select name="tipo" id="tipo" onChange={(e) => setTipo({ ...tipo, value: e.target.value })}>
        <option value="">Escolha um</option>
        {tipoOption.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
      <label htmlFor="marca"> Marcas: </label>
      <select
        name="marca"
        id="marca"
        onChange={(e) => setMarca({ ...marca, value: e.target.value })}
      >
        <option value="">
          {marcaOption.length === 0 ? 'selecione um tipo' : 'Selecione uma marca'}
        </option>
        {marcaOption.map((e) => (
          <option value={e.nome}>{e.nome}</option>
        ))}
      </select>

      <label htmlFor="modelo"> Marcas: </label>
      <select
        name="modelo"
        id="modelo"
        onChange={(e) => setModelo({ ...modelo, value: e.target.value })}
      >
        <option value="">
          {modelo ==='' ? 'selecione uma marca' : 'Selecione um modelo'}
        </option>
        {modeloOption.map((e) => (
          <option value={e.codigo}>{e.nome}</option>
        ))}
      </select>
    </div>
  );
}
