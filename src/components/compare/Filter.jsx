import React from 'react';
import ColumnSearch from './filerColumn';
import FiltersBox from './filterBox';
import ButtonAdd from './filterButton';
import ComparisonSearch from './filterComparison';

export default function Procurar(props) {
  const { setName, filterByNumericValues } = useContext(Context);
  /* const { replaceFilters, selectionFilter, usedFilters } = props; */
  
  let filtersDrop = NumericOptions;
  filterByNumericValues.forEach((e) => {
    filtersDrop = filtersDrop.filter((o) => o !== e.column);
  });
  return (
    <div className="flex-me header">
      <NameSearch handlerChange={handlerChange} />
      <OrderToMe />
      <div className="filters ">
        <ColumnSearch />
        <ComparisonSearch />
        <ButtonAdd />
      </div>
      <FiltersBox />
    </div>
  );
}
