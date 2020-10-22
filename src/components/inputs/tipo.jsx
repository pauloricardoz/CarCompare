import React, { useContext, useEffect } from 'react';
import Context from '../../context/context';
import { apiMarca } from '../../services/apiFipe';
import { updateState } from '../../services/comumFunctions';

const tipoOption = ['carros', 'motos', 'caminhoes'];

export default function Tipo() {
  const {
    tipo,
    setTipo,
    setMarca,
    setMarcaOption,
    marca,
    setAno,
    setAnoOption,
    modelo,
    setModelo,
    setModeloOption,
  } = useContext(Context);
  useEffect(async () => {
    if (tipo.value !== '' && marca.value !== '') {
      setMarca({ ...marca, value: '' });
      setMarcaOption(null);
      setModelo({ ...modelo, value: '' });
      setModeloOption(null);
      setAno({ ...modelo, value: '' });
      setAnoOption(null);
    }
    if (tipo.value !== '') apiMarca(tipo.value).then((e) => setMarcaOption(e));
  }, [tipo]);
  return (
    <div>
      <label htmlFor="tipo">Tipo de veiculo: </label>
      <select
        name="tipo"
        id="tipo"
        onChange={(e) => {
          setMarcaOption(null);
          updateState(e, setTipo, tipoOption);
        }}
      >
        <option value="" selected disabled hidden>
          Escolha um
        </option>
        {tipoOption.map((e) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}
