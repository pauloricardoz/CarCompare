import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Context from '../../context/context';
import { apiMarca } from '../../services/apiFipe';
import { updateState } from '../../services/comumFunctions';

const tipoOption = ['carros', 'motos', 'caminhoes'];

export default function Test() {
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
  const [textBtn, setTextBtn] = useState(' Tipo de veiculo:');
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
    <Dropdown className="inputs">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {textBtn}
      </Dropdown.Toggle>

      <Dropdown.Menu
        name="tipo"
        id="tipo"
        onClick={(e) => {
          setMarcaOption(null);
          updateState(e, setTipo, tipoOption);
          setTextBtn(`${e.target.outerText}`);
          console.log(e);
        }}
        
      >
        {tipoOption.map((e) => (
          <Dropdown.Item value={e} key={e}>
            {e}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
