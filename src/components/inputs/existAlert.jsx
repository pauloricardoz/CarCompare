import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import Context from '../../context/context';

export default function ExistAlert() {
  const { exist } = useContext(Context);
  return exist ? (
    <Alert className="exist" variant={'danger'}>
      Já existe!
    </Alert>
  ) : null;
}
