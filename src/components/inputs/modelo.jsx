import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Context from '../../context/context';
import { apiAnos, apiMarca, apiModelos } from '../../services/apiFipe';

function updateState(event, stateFunc, option) {
  let codigo = option.find((opt) => opt.nome === event);
  if (codigo) codigo = codigo.codigo;
  stateFunc((state) => ({ ...state, value: event, codigo }));
}

export default function Modelo() {
  const { tipo, marca, modelo, setModelo, modeloOption, setAno, setAnoOption } = useContext(
    Context
  );
  const [textBtn, setTextBtn] = useState('Modelo:');

  useEffect(() => setTextBtn('Modelo:'), [marca]);
  useEffect(() => {
    if (modelo.value === '') {
      setAno({ ...modelo, value: '' });
      setAnoOption(null);
      return null;
    }
    console.log(tipo, marca.codigo, modelo.codigo)
    apiAnos(tipo.value, marca.codigo, modelo.codigo).then((e) => {
      setAnoOption(e);
    });
  }, [modelo]);
  if (!modeloOption) return null;
  return (
      <Dropdown className="inputs">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {textBtn}
        </Dropdown.Toggle>

        <Dropdown.Menu
          name="modelo"
          id="modelo"
          onClick={(e) => {
            setAnoOption(null);
            updateState(e.target.outerText, setModelo, modeloOption);
            setTextBtn(`${e.target.outerText}`);
          }}
        >
          {modeloOption.map((e) => (
            <Dropdown.Item value={e.nome} key={e.codigo}>
              {e.nome}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
  );
}
