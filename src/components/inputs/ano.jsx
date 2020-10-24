import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Context from '../../context/context';
import { apiAnos, apiMarca, apiModelos, apiValor } from '../../services/apiFipe';

function cleanInput(context) {
  const { setValor, setValoresChart } = context;
  setValor(null);
  setValoresChart([]);
}
function updateState(event, stateFunc) {
  stateFunc((state) => event.target.attributes[0].value);
}

export default function Ano() {
  const { tipo, marca, modelo, ano, setAno, anoOption, setValor, setValoresChart } = useContext(
    Context
  );
  const [textBtn, setTextBtn] = useState('Ano:');

  useEffect(() => setTextBtn('Ano:'), [modelo]);
  useEffect(() => {
    cleanInput({ setValor, setValoresChart });
    if (ano.value === '' || typeof ano !== 'string') {
      setValor(null);
      return null;
    }
    apiValor(tipo.value, marca.codigo, modelo.codigo, ano).then((e) => {
      setValor(e);
    });
  }, [ano]);
  if (!anoOption) return null;
  return (
    <div className="inputs">
      <Dropdown className="inputs">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {textBtn}
        </Dropdown.Toggle>

        <Dropdown.Menu
          name="ano"
          id="ano"
          onClick={(e) => {
            updateState(e, setAno);
            setTextBtn(`${e.target.outerText}`);
          }}
        >
          {anoOption.map((e) => (
            <Dropdown.Item value={e.codigo} key={e.codigo}>
              {e.nome}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
