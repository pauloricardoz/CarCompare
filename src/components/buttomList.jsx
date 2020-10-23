import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../context/context';
import Cards from './cards/cards';

export default function ButtomList() {
  const { showList, setShowList, autos } = useContext(Context);
  return (
    <div className="lista">
      <Button variant={!showList ? 'primary' : 'success'} onClick={() => setShowList((s) => !s)}>
        {!showList ? 'Ver Lista' : 'Ocutar'}
      </Button>
    </div>
  );
}
