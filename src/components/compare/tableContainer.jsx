import React, { useContext } from 'react';
import Context from '../../context/context';
import Procurar from './searchMe';
import Table from './table';

export default function ContainerTable() {
  const { autos } = useContext(Context);
  if (autos.length === 0) {
    return (
      <div className="no-favority">
        <h2>Sem Favoritos no momento</h2>
      </div>
    );
  }
  return (
    <div>
      <Procurar />
      <div className="table">
        <Table />
      </div>
    </div>
  );
}
