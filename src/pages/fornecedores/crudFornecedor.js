import { NotificationManager } from 'react-notifications';

const crudFornecedor = async (fornecedor, toDelete) => {
  
  if(!toDelete && !(fornecedor.nome && fornecedor.email && fornecedor.cpf_cnpj)) {
    NotificationManager.error('Informações obrigatórias: Nome, email e CPF ou CNPJ.');
    return;
  }

  const urlBase = 'http://localhost:3001/fornecedores';
  const url = fornecedor.id ? urlBase + "/" + fornecedor.id : urlBase;
  const method = fornecedor.id ? (toDelete ? "DELETE": "PUT") : "POST";

  try {
    const response = await fetch(url, {
      method: method,
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

export default crudFornecedor;
