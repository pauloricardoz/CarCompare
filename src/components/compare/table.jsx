import React, { useContext } from 'react';
import Context from '../../context/context';

const keys = [
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
  'Remover'
];
export default function Table() {
  const { autos, showTable } = useContext(Context);
  if (autos.length === 0) return null;
  if (!autos) return null;

  console.log(autos);
  return (
    <div>
      {showTable ? (
        <table>
          <thead>
            {cabecalhos.map((c) => (
              <th className="vertical-text">
                <span className="tab-cabec">{c}</span>
              </th>
            ))}
          </thead>
          <tbody>
            {autos.map((a) => (
              <tr>
                <td>{a[keys[0]]}</td>
                <td>{a[keys[1]]}</td>
                <td>{a[keys[2]]}</td>
                <td>{a[keys[3]]}</td>
                <td>{a[keys[4]]}</td>
                <td>{a[keys[5]]}</td>
                <td>{a[keys[6]]}</td>
                <td>{a[keys[7]]}</td>
                <td>{a[keys[8]].replace(/R\$ /,'')}</td>
                <td><button>-</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
