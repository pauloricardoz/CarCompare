import React, { useContext } from 'react';
import Context from '../../context/context';

export default function FiltersBox() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(Context);
  return (
    <div className="column-me">
      {filterByNumericValues.map((e) => (
        <div data-testid="filter" key={`${e.column}`}>
          <button
            key={`${e.column}b`}
            id={e.column}
            onClick={() =>
              setFilterByNumericValues(filterByNumericValues.filter((u) => u.column !== e.column))
            }
          >
            x
          </button>
          <label
            htmlFor={e.column}
            key={`${e.column}l`}
          >{`${e.column} ${e.comparison} ${e.value}`}</label>
        </div>
      ))}
    </div>
  );
}
