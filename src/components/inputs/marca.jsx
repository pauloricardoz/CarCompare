import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Context from '../../context/context';
import { apiModelos } from '../../services/apiFipe';

function updateState(event, stateFunc, option) {
  let codigo = option.find((opt) => opt.nome === event);
  if (codigo) codigo = codigo.codigo;
  stateFunc((state) => ({ ...state, value: event, codigo }));
}

export default function Marca() {
  const {
    tipo,
    marca,
    setMarca,
    marcaOption,
    modelo,
    setModelo,
    setModeloOption,
    setValoresChart,
  } = useContext(Context);
  const [textBtn, setTextBtn] = useState('Marcas:');
  useEffect(() => setTextBtn('Marcas:'), [tipo]);
  useEffect(() => {
    if (!marcaOption) return null;
  }, [marcaOption]);
  useEffect(async () => {
    if (marca.value === '' || typeof marca.value !== 'string') {
      await setModelo({ ...modelo, value: '' });
      await setModeloOption(null);
      setValoresChart([]);
      return null;
    }
    apiModelos(tipo.value, marca.codigo).then((e) => {
      setModeloOption(e.modelos);
    });
    return () => {
      setModelo({ ...modelo, value: '' });
      setModeloOption(null);
      setMarca((s) => ({ ...s, value: '' }));
      setValoresChart([]);
    };
  }, [marca]);
  if (!marcaOption) return null;
  return (
    <Dropdown className="inputs">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {textBtn}
      </Dropdown.Toggle>
      <Dropdown.Menu
        name="marca"
        id="marca"
        onClick={(e) => {
          setModeloOption(null);
          updateState(e.target.outerText, setMarca, marcaOption);
          setTextBtn(`${e.target.outerText}`);
        }}
      >
        {marcaOption.map((e) => (
          <Dropdown.Item value={e.nome} key={e.nome}>
            {e.nome}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
