import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../context/context';
import Cards from './cards/cards';

export default function ButtomList() {
  const [showList, setShowList] = useState(false);
  const { autos } = useContext(Context);
  return (
    <div>
      <div className="lista">
        <Button variant={!showList ? 'primary' : 'success'} onClick={() => setShowList((s) => !s)}>
          {!showList ? 'Ver Lista' : 'Ocutar'}
        </Button>
      </div>
      {showList ? <div className="cards-collections">{!autos ? null : <Cards />}</div> : null}
    </div>
  );
}
