import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../../context/context';

export default function ButtonAdd() {
  const { add, SetVal } = useContext(Context);
  return (
    <div className="flex-me column-me center-me">
      <input
        className="center-me"
        type="number"
        name=""
        data-testid="value-filter"
        onChange={(e) => SetVal(e.target.value)}
      />
      <Button onClick={() => add()} className="center-me">
        Add
      </Button>
    </div>
  );
}
