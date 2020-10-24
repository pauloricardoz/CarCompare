import React, { useContext } from 'react';
import Context from '../../context/context';

const comparisonOptions = ['maior que', 'menor que', 'igual a'];

export default function ComparisonSearch() {
  const { SetComp } = useContext(Context);
  return (
    <div className="flex-me center-me">
      <select
        className="center-me"
        data-testid="comparison-filter"
        onChange={(e) => SetComp(e.target.value)}
      >
        <option value="" disabled defaultValue>
          Comparação
        </option>
        {comparisonOptions.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}
