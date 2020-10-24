import React, { useContext } from 'react';
import Context from '../../context/context';
import { Button, Form } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

export default function FiltersBox() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(Context);
  return (
    <Form className="filters-used">
      {filterByNumericValues.map((e) => (
        <Form.Group controlId="ValorDoFiltro" key={`${e.column}`} >
          <Button
            size="sm"
            key={`${e.column}b`}
            id={e.column}
            onClick={() =>
              setFilterByNumericValues(filterByNumericValues.filter((u) => u.column !== e.column))
            }
          >
            <FaTimes />
          </Button>
          <Form.Label id="label-remove" htmlFor={e.column} key={`${e.column}l`}>
            {`${e.column} ${e.comparison} ${e.value}`}
          </Form.Label>
        </Form.Group>
      ))}
    </Form>
  );
}
