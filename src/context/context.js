import React, { createContext, useState } from 'react';

const Context = createContext();

export function Provider({ children }) {
  const [tipo, setTipo] = useState({ index: 0, value: '', index: 0 });
  const [marca, setMarca] = useState({ index: 1, value: '', index: 0 });
  const [modelo, setModelo] = useState({ index: 2, value: '', index: 0 });
  const [ano, setAno] = useState({ index: 3, value: '', index: 0 });
  const [valor, setValor] = useState(null);
  const [marcaOption, setMarcaOption] = useState(null);
  const [modeloOption, setModeloOption] = useState(null);
  const [anoOption, setAnoOption] = useState(null);
  const [autos, setAutos] = useState([]);
  const [exist, setExist] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const context = {
    tipo,
    setTipo,
    marca,
    setMarca,
    modelo,
    setModelo,
    ano,
    setAno,
    valor,
    setValor,
    marcaOption,
    setMarcaOption,
    modeloOption,
    setModeloOption,
    anoOption,
    setAnoOption,
    autos,
    setAutos,
    exist,
    setExist,
    showList,
    setShowList,
    showTable, setShowTable,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export default Context;
