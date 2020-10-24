import React from 'react';
import ColumnSearch from './filerColumn';
import FiltersBox from './filterBox';
import ButtonAdd from './filterButton';
import ComparisonSearch from './filterComparison';
import OrderToMe from './orderMe';
import NameSearch from './SearchName';

export default function Procurar() {
  return (
    <div className="options-table">
      <div className="vertical-line"></div>
      <div className="options-top">
        <NameSearch />
        <OrderToMe />
      </div>
      <div className="vertical-line"></div>
      <div className="filter ">
        <ColumnSearch />
        <ComparisonSearch />
        <ButtonAdd />
      </div>

      <div className="vertical-line"></div>
      <FiltersBox />
      <div className="vertical-line"></div>
    </div>
  );
}
