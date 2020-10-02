import React, { useState, useEffect } from 'react';

const Home = () => {

  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    getEmpresas();
  }, [setEmpresas]);

  const getEmpresas = async () => {
    try {
      const response = await fetch('http://localhost:3000/empresas');
      const data = await response.json();

      setEmpresas(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {empresas.map(empresa => (
        empresa.nomeFantasia
      ))}
    </div>
  );
};

export default Home;
