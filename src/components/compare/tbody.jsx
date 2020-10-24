import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaMinus } from 'react-icons/fa';
import Context from '../../context/context';

export default function Tbody(tabAutos) {
  const { setAutos, columns, name } = useContext(Context);
  return (
    <tbody>
      {tabAutos
        .filter((e) => (name === '' ? true : new RegExp(name, 'i').test(e.Modelo)))
        .map((a) => (
          <tr>
            <td>{a[columns[0]]}</td>
            <td>{a[columns[1]]}</td>
            <td>{a[columns[2]]}</td>
            <td>{a[columns[3]]}</td>
            <td>{a[columns[4]]}</td>
            <td>{a[columns[5]]}</td>
            <td>{a[columns[6]]}</td>
            <td>{a[columns[7]]}</td>
            <td>{a[columns[8]].replace(/R\$ /, '')}</td>
            <td>
              <Button
                id="remove-table"
                onClick={() =>
                  setAutos((s) =>
                    s.filter(
                      (auto) =>
                        `${auto.CodigoFipe}/${auto.AnoModelo}` !== `${a.CodigoFipe}/${a.AnoModelo}`
                    )
                  )
                }
              >
                <FaMinus />
              </Button>
            </td>
          </tr>
        ))}
    </tbody>
  );
}
