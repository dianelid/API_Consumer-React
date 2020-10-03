import { NotificationManager } from 'react-notifications';

const saveEmpresa = async (empresa) => {
  
  if(!(empresa.nomeFantasia && empresa.uf && empresa.cnpj)) {
    NotificationManager.error('Informações obrigatórias: Nome fantasia, UF e CNPJ.');
    return;
  }

  try {
    const response = await fetch('http://localhost:3001/empresas', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(empresa)
    });
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default saveEmpresa;
