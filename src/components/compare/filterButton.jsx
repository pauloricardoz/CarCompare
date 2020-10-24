import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import Context from '../../context/context';

export default function ButtonAdd() {
  const { add, SetVal } = useContext(Context);
  return (
    <Form>
      <Form.Group controlId="ValorDoFiltro">
        <Form.Label>Valor para filtrar:</Form.Label>
        <Form.Control type="number" placeholder="Valor" onChange={(e) => SetVal(e.target.value)} />
      </Form.Group>
      <Button onClick={() => add()} className="center-me">
        Adicionar
      </Button>
    </Form>
  );
}
