import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../context/context';

export default function ButtomTabela() {
  const { showTable, setShowTable } = useContext(Context);
  return (
    <div className="table">
      <Button variant={!showTable ? 'primary' : 'success'} onClick={() => setShowTable((s) => !s)}>
        {!showTable ? 'Ver Tabela' : 'Ocutar Tabela'}
      </Button>
    </div>
  );
}
