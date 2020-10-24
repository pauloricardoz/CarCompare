import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import Context from '../../context/context';

const comparisonOptions = ['maior que', 'menor que', 'igual a'];

export default function ComparisonSearch() {
  const { SetComp } = useContext(Context);
  return (
    <Form>
      <Form.Label>Comparação:</Form.Label>
      <Form.Control as="select" onChange={(e) => SetComp(e.target.value)}>
        {comparisonOptions.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </Form.Control>
    </Form>
  );
}
