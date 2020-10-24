import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import Context from '../../context/context';

export default function OrderToMe() {
  const [orderBasico, setOrderBasico] = useState({
    column: 'Modelo',
    sort: 'ASC',
  });
  const { columns, setOrder } = useContext(Context);
  return (
    <div>
      <Form>
        <Form.Label>Ordenar por:</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => setOrderBasico({ ...orderBasico, column: e.target.value })}
        >
          {columns.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </Form.Control>
        <Form.Check
          type="radio"
          name="ord"
          id="inline-radio-1"
          inline
          label="ASC"
          defaultChecked="true"
          onClick={() => setOrderBasico({ ...orderBasico, sort: 'ASC' })}
        />
        <Form.Check
          type="radio"
          name="ord"
          id="inline-radio-2"
          inline
          label="DESC"
          onClick={() => setOrderBasico({ ...orderBasico, sort: 'DSC' })}
        />
      </Form>
      <Button onClick={() => setOrder(orderBasico)}>Ordernar</Button>
    </div>
  );
}
