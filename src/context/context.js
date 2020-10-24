import React, { createContext, useState } from 'react';

const Context = createContext();
const columns = [
  'Modelo',
  'AnoModelo',
  'Marca',
  'Combustivel',
  'TipoVeiculo',
  'CodigoFipe',
  'SiglaCombustivel',
  'MesReferencia',
  'Valor',
];
export function Provider({ children }) {
  const [tipo, setTipo] = useState({ index: 0, value: '' });
  const [marca, setMarca] = useState({ index: 1, value: '' });
  const [modelo, setModelo] = useState({ index: 2, value: '' });
  const [ano, setAno] = useState({ index: 3, value: '' });
  const [valor, setValor] = useState(null);
  const [marcaOption, setMarcaOption] = useState(null);
  const [modeloOption, setModeloOption] = useState(null);
  const [anoOption, setAnoOption] = useState(null);
  const [autos, setAutos] = useState([]);
  const [exist, setExist] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [order, setOrder] = useState({ column: 'Modelo', sort: 'ASC' });
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [col, SetCol] = useState('AnoModelo');
  const [comp, SetComp] = useState('maior que');
  const [val, SetVal] = useState(undefined);
  const [anosToChart, setAnosToChart] = useState([]);
  const [valoresChart, setValoresChart] = useState([]);
  const add = () => {
    if (col === '' || comp === '' || !val) {
      return null;
    }
    const filtro = { column: col, comparison: comp, value: val };
    setFilterByNumericValues((oldFilters) => [...oldFilters, filtro]);
    SetCol('');
  };
  const context = {
    tipo, setTipo, marca, setMarca, modelo, setModelo, ano, setAno, 
    valor, setValor, marcaOption, setMarcaOption, modeloOption, setModeloOption, 
    anoOption, setAnoOption, autos, setAutos, exist, setExist, showList, setShowList, 
    showTable, setShowTable, columns, add, order, setOrder, name, setName, 
    filterByNumericValues, setFilterByNumericValues, col, SetCol, comp, SetComp, 
    val, SetVal, anosToChart, setAnosToChart, valoresChart, setValoresChart
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export default Context;
