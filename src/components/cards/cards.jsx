import React, { useContext } from 'react';
import Context from '../../context/context';
import Card from './card';

export default function Cards() {
  const { autos } = useContext(Context);
  console.log('autos', autos);
  return (
    <div className="cards">
      {autos.map((data) => (
        <Card data={data} />
      ))}
    </div>
  );
}
