import React, { useState, useEffect } from 'react';

const Contador = () => {
  const [contagem, setContagem] = useState(0);
  const [titulo, setTitulo] = useState(null);

  const aumentar = () => setContagem(contagem + 1);
  const diminuir = () => setContagem(contagem - 1);

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const response = await fetch('URL_DA_API_IBGE');
        const data = await response.json();
        setTitulo(data[0]?.titulo);
      } catch (error) {
        console.error('Erro ao buscar notícia:', error);
      }
    };

    fetchNoticia();
  }, []);

  return (
    <div>
      <h1>Contador: {contagem}</h1>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
      {titulo && <p>Notícia de Destaque: {titulo}</p>}
    </div>
  );
};

export default Contador;
