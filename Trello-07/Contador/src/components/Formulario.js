import React, { useState, useEffect } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: '',
  });
  const [formValido, setFormValido] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every((field) => field.trim() !== '');
    setFormValido(allFieldsFilled);
  }, [formData]);

  return (
    <div>
      <form>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Idade:</label>
          <input type="number" name="idade" value={formData.idade} onChange={handleChange} />
        </div>
      </form>
      {formValido && <p>Formulário totalmente preenchido!</p>}
    </div>
  );
};

export default Formulario;
