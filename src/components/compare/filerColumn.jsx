import React, { useContext } from 'react';
import Context from '../../context/context';

export default function ColumnSearch() {
  const { SetCol, filterByNumericValues } = useContext(Context);
  return (
    <div className="flex-me center-me">
      <select
        data-testid="column-filter"
        onChange={(e) => SetCol(e.target.value)}
        className="center-me"
      >
        <option value="" defaultValue>
          Coluna
        </option>
        {['AnoModelo', 'TipoVeiculo', 'Valor']
          .filter((e) => !filterByNumericValues.map((f) => f.column).includes(e))
          .map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
      </select>
    </div>
  );
}
