import { NotificationManager } from 'react-notifications';

const saveFornecedor = async (fornecedor) => {
  
  if(!(fornecedor.nome && fornecedor.email && fornecedor.cpf_cnpj)) {
    NotificationManager.error('Informações obrigatórias: Nome, email e CPF ou CNPJ.');
    return;
  }

  try {
    const response = await fetch('http://localhost:3001/fornecedores', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fornecedor)
    });
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default saveFornecedor;
