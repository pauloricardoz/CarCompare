import React, { useContext } from 'react';
import './App.css';
import Selections from './components/selections';
import Context, { Provider } from './context/context'

function App() {
  const { valor } = useContext(Context);
  let valores = null;
  if (valor) valores = Object.entries(valor);
  return (
      <div className="App">
        <header></header>
        <Selections />
        <div>
        <ul>
          {!valores
            ? null
            : valores.map((e) => (
                <li>
                  {e[0]}: {e[1]}
                </li>
              ))}
        </ul>
      </div>

      </div>
  );
}

export default App;
