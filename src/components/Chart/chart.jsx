import React, { useContext, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Context from '../../context/context';

function convertMoney(money) {
  if (!money) return null;
  return 1 * money.replace(/R\$ /, '').replace(/\./g, '').replace(/,/, `.`);
}
let state;
export default function ChartAuto() {
  const { valoresChart } = useContext(Context);
  if (!valoresChart) return null;
  /* if (!valoresChart.AnoModelo) return null;
  if (!valoresChart.Valor) return null; */
  const status = valoresChart.sort((a, b) => a.AnoModelo - b.AnoModelo);
  return (
    <div>
      <Line
        data={{
          labels: status.map((e) => e.AnoModelo),
          datasets: [
            {
              label: 'Valor',
              fill: true,
              lineTension: 0.5,
              backgroundColor: 'rgba(0,123,255,0.5)',
              borderColor: 'rgba(0,123,255,0.5)',
              borderWidth: 2,
              data: status.map((e) => convertMoney(e.Valor)),
            },
          ],
        }}
        width={400}
        height={400}
        options={{
          title: {
            display: true,
            text: 'Evolução do Preço',
            fontSize: 24,
          },
          legend: {
            display: true,
            position: 'right',
          },
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
}
