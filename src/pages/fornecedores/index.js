import React, { useState, useEffect } from 'react';

const Fornecedores = () => {

  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    getFornecedores();
  }, [setFornecedores]);

  const getFornecedores = async () => {
    try {
      const response = await fetch('http://localhost:3000/fornecedores');
      const data = await response.json();

      setFornecedores(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {fornecedores.map(fornecedor => (
        fornecedor.nome
      ))}
    </div>
  );
};

export default Fornecedores;
