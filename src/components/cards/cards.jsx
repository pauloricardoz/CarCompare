import React, { useContext } from 'react';
import Context from '../../context/context';
import Card from './card';

export default function Cards() {
  const { autos } = useContext(Context);
  console.log('autos', autos);
  return (
    <div className="cards">
      {autos.map((data) => (
        <Card data={data} />
      ))}
    </div>
  );
}

/* Valor: R$ 91.916,00
Marca: Agrale
Modelo: MARRUÁ AM 100 2.8 CS TDI Diesel
AnoModelo: 2013
Combustivel: Diesel
CodigoFipe: 060003-2
MesReferencia: outubro de 2020
TipoVeiculo: 1
SiglaCombustivel: D */
