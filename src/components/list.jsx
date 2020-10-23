import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../context/context';
import Cards from './cards/cards';

export default function ListFavorities() {
  const { showList, autos } = useContext(Context);
  return (
    <div>
      {showList ? <div className="cards-collections">{!autos ? null : <Cards />}</div> : null}
    </div>
  );
}
