import React, { useState } from 'react';

const ListaInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [lista, setLista] = useState([]);

  const handleChange = (e) => setInputValue(e.target.value);

  const adicionarNaLista = () => {
    setLista([...lista, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={adicionarNaLista}>Adicionar</button>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaInput;
