import React, { useContext, useEffect } from 'react';
import Context from '../../context/context';
import { FaMinus } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import Tbody from './tbody';

const cabecalhos = [
  'Modelo',
  'Ano Modelo',
  'Marca',
  'Combustivel',
  'Tipo Veiculo',
  'Codigo Fipe',
  'Sigla Combustivel',
  'Mês Referência',
  'Valor (RS)',
  'Remover',
];
const cabString = [
  'Modelo',
  'Marca',
  'Combustivel',
  'CodigoFipe',
  'SiglaCombustivel',
  'MesReferencia',
];

function organizeMe(a, b, type) {
  const column = type.column;
  let organized;
  if (cabString.includes(column)) {
    organized = a[column] > b[column] ? 1 : -1;
  } else {
    if (column !== 'Valor') {
      organized = parseInt(a[column], 10) - parseInt(b[column], 10);
    } else {
      organized =
        parseInt(a[column].replace(/R\$ /, ''), 10) - parseInt(b[column].replace(/R\$ /, ''), 10);
    }
  }
  if (type.sort === 'ASC') {
    return organized;
  }
  return organized * -1;
}

function filterFunction(filterByNumericValues) {
  let tabAutos = [];
  filterByNumericValues.forEach((e) => {
    switch (e.comparison) {
      case 'maior que':
        tabAutos = tabAutos.filter((dado) => Number(dado[e.column]) > e.value);
        break;
      case 'menor que':
        tabAutos = tabAutos.filter((dado) => Number(dado[e.column]) < e.value);
        break;
      case 'igual a':
        tabAutos = tabAutos.filter((dado) => dado[e.column] === e.value);
        break;
      default:
        break;
    }
  });
  return tabAutos;
}

export default function Table() {
  const { autos, setAutos, showTable, columns, order, name, filterByNumericValues } = useContext(
    Context
  );
  if (!autos) return null;
  if (autos.length === 0) return null;
  let tabAutos = autos.sort((a, b) => organizeMe(a, b, order));
  tabAutos = filterFunction(filterByNumericValues);
  return (
    <table>
      <thead>
        <tr className="tab-cabec">
          {cabecalhos.map((cabecalho) => (
            <th className="rotate">
              <div>
                <span>{cabecalho}</span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      {Tbody(tabAutos)}
    </table>
  );
}
