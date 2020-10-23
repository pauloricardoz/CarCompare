import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../context/context';
import Cards from './cards/cards';

export default function ButtomTabela() {
  const { showTable, setShowTable, autos } = useContext(Context);
  return (
    <div className="table">
      <Button variant={!showTable ? 'primary' : 'success'} onClick={() => setShowTable((s) => !s)}>
        {!showTable ? 'Ver Tabela' : 'Ocutar Tabela'}
      </Button>
    </div>
  );
}
