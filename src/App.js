import React, { useEffect, useState } from 'react';
import './style.css';

function App() {
  const [nutri, setNutri] = useState([]);
  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

    fetch(url)
      .then((r) => r.json())
      .then((json) => setNutri(json))
  }, []);

  return (
    <div>
      <header>
        <strong>React Nutri</strong>

        {nutri.map((item) => {
          return (
            <article key={item.id}>
              <strong>{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo}></img>
              <p>{item.subtitulo}</p>
              <button>Acessar</button>
            </article>
          );
        })}
      </header>
    </div>
  );
}

export default App;