import React, { useContext } from 'react';
import Context from '../../context/context';

export default function NameSearch(props) {
  const { setName } = useContext(Context);
  return (
    <div className="flex-me column-me">
      <label htmlFor="look">Filtrar Modelo:</label>
      <input name="look" type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
