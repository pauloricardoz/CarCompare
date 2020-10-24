import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import Context from '../../context/context';

export default function NameSearch(props) {
  const { setName } = useContext(Context);
  return (
    <Form>
      <Form.Group controlId="FiltrarNomeModelo">
        <Form.Label>Filtrar por Modelo:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nome do Modelo"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}
