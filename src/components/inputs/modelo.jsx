import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Context from '../../context/context';
import { apiAnos, apiMarca, apiModelos } from '../../services/apiFipe';

function updateState(event, stateFunc, option) {
  let codigo = option.find((opt) => {
    const optWOSpace = opt.nome.replace(/\s\s/g, ' ');
    return optWOSpace === event;
  });
  if (codigo) codigo = codigo.codigo;
  stateFunc((state) => ({ ...state, value: event, codigo }));
}

function cleanInput(context) {
  const { setAno, setValor, setAnoOption } = context;

  setAno({ index: 0, value: '', index: 0 });
  setValor(null);
  setAnoOption(null);
}

export default function Modelo() {
  const {
    tipo,
    marca,
    modelo,
    setModelo,
    modeloOption,
    setAno,
    setAnoOption,
    setValor,
  } = useContext(Context);
  const [textBtn, setTextBtn] = useState('Modelo:');

  useEffect(() => setTextBtn('Modelo:'), [marca]);
  useEffect(() => {
    cleanInput({ setAno, setValor, setAnoOption });
    if (modelo.value === '') {
      setAno({ ...modelo, value: '' });
      setAnoOption(null);
      return null;
    }
    apiAnos(tipo.value, marca.codigo, modelo.codigo).then((e) => {
      console.log(e);
      setAnoOption(e);
    });
  }, [modelo]);
  if (!modeloOption) {
    return null;
  }
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
