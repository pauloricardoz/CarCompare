import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import Context from '../../context/context';

export default function ColumnSearch() {
  const { SetCol, filterByNumericValues } = useContext(Context);
  return (
      <Form>
        <Form.Label>Filtrar por:</Form.Label>
        <Form.Control as="select" onChange={(e) => SetCol(e.target.value)}>
          <option value="" defaultValue>
            Coluna
          </option>
          {['AnoModelo', 'TipoVeiculo', 'Valor']
            .filter((e) => !filterByNumericValues.map((f) => f.column).includes(e))
            .map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
        </Form.Control>
      </Form>

  );
}
