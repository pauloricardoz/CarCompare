import React from 'react';

export default function Card(props) {
  const {
    AnoModelo,
    CodigoFipe,
    Combustivel,
    Marca,
    MesReferencia,
    Modelo,
    SiglaCombustivel,
    TipoVeiculo,
    Valor,
  } = props.data;

  return (
    <div className="card">
      <p>
        <strong>AnoModelo: </strong> {AnoModelo}
      </p>
      <p>
        <strong>Codigo Fipe: </strong> {CodigoFipe}
      </p>
      <p>
        <strong>Combustivel: </strong> {Combustivel}
      </p>
      <p>
        <strong>Marca: </strong> {Marca}
      </p>
      <p>
        <strong>Mes Referencia: </strong> {MesReferencia}
      </p>
      <p>
        <strong>Modelo: </strong> {Modelo}
      </p>
      <p>
        <strong>Sigla Combustivel: </strong> {SiglaCombustivel}
      </p>
      <p>
        <strong>Tipo Veiculo: </strong> {TipoVeiculo}
      </p>
      <p>
        <strong>Valor: </strong> {Valor}
      </p>
    </div>
  );
}
