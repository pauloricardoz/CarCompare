import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../context/context';
import Cards from './cards/cards';

export default function ListFavorities() {
  const { showList, autos } = useContext(Context);
  if (autos === undefined) return null;
  return (
    <div>
      {showList ? (
        <div className="cards-collections">
          {autos.length === 0 ? <h2>Sem Favoritos até o momento</h2> : <Cards />}
        </div>
      ) : null}
    </div>
  );
}
