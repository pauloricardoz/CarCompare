import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../context/context';

export default function ButtomShow(props) {
  const { show, setShow, text } = props;

  return (
    <div className="lista">
      <Button variant={!show ? 'primary' : 'success'} onClick={() => setShow((s) => !s)}>
        {!show ? text.show : text.hide}
      </Button>
    </div>
  );
}
