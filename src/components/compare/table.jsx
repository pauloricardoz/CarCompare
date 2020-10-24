import React, { useContext, useEffect } from 'react';
import Context from '../../context/context';
import { FaMinus } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

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

export default function Table() {
  const { autos, setAutos, showTable, columns, order, name, filterByNumericValues } = useContext(
    Context
  );
  
  if (!autos) return null;
  if (autos.length === 0) return null;
  let tabAutos = autos.sort((a, b) => organizeMe(a, b, order));
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
  return (
    <table>
      <thead>
        <tr className="tab-cabec" >
          {cabecalhos.map((cabecalho) => (
            <th className="rotate">
              <div><span>{cabecalho}</span></div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tabAutos
          .filter((e) => (name === '' ? true : new RegExp(name, 'i').test(e.Modelo)))
          .map((a) => (
            <tr>
              <td>{a[columns[0]]}</td>
              <td>{a[columns[1]]}</td>
              <td>{a[columns[2]]}</td>
              <td>{a[columns[3]]}</td>
              <td>{a[columns[4]]}</td>
              <td>{a[columns[5]]}</td>
              <td>{a[columns[6]]}</td>
              <td>{a[columns[7]]}</td>
              <td>{a[columns[8]].replace(/R\$ /, '')}</td>
              <td>
                <Button
                  id="remove-table"
                  onClick={() =>
                    setAutos((s) =>
                      s.filter(
                        (auto) =>
                          `${auto.CodigoFipe}/${auto.AnoModelo}` !==
                          `${a.CodigoFipe}/${a.AnoModelo}`
                      )
                    )
                  }
                >
                  <FaMinus />
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
