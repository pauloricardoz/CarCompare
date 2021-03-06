import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Context from '../../context/context';
import { apiMarca } from '../../services/apiFipe';

function updateState(event, stateFunc, option) {
  let codigo = option.find((opt) => opt.nome === event);
  if (codigo) codigo = codigo.codigo;
  stateFunc((state) => ({ ...state, value: event, codigo }));
}

const tipoOption = ['carros', 'motos', 'caminhoes'];

function clean(
setMarca, setMarcaOption, setModelo, setModeloOption, setAno, setAnoOption ) {
  setMarca(marca=>({ ...marca, value: '' }));
  setMarcaOption(null);
  setModelo(modelo=>({ ...modelo, value: '' }));
  setModeloOption(null);
  setAno(ano=>({ ...ano, value: '' }));
  setAnoOption(null);
}

export default function Tipo() {
  const {
    tipo, setTipo, setMarca, setMarcaOption, marca, setAno, setAnoOption, modelo, setModelo, setModeloOption, } = useContext(Context);
  const [textBtn, setTextBtn] = useState(' Tipo de veiculo:');
  useEffect(async () => {
    if (tipo.value !== '' && marca.value !== '') {
      clean( setMarca, setMarcaOption, setModelo, setModeloOption, setAno, setAnoOption )
    }
    if (tipo.value !== '' && typeof tipo.value === 'string') {
      apiMarca(tipo.value).then((e) => setMarcaOption(e));
    }
  }, [tipo]);
  return (
    <Dropdown className="inputs">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {textBtn}
      </Dropdown.Toggle>

      <Dropdown.Menu
        name="tipo"
        id="tipo"
        onClick={(e) => {
          setMarcaOption(null);
          updateState(e.target.outerText, setTipo, tipoOption);
          setTextBtn(`${e.target.outerText}`);
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
