import React, { useContext } from 'react';
import ColumnSearch from './filerColumn';
import FiltersBox from './filterBox';
import ButtonAdd from './filterButton';
import ComparisonSearch from './filterComparison';
import OrderToMe from './orderMe';
import NameSearch from './SearchName';

export default function Procurar() {
  return (
    <div className="flex-me">
      <NameSearch />
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
