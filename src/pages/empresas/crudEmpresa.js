import { NotificationManager } from 'react-notifications';

const crudEmpresa = async (empresa, setRefetch, toDelete) => {
  
  if(!toDelete && !(empresa.nomeFantasia && empresa.uf && empresa.cnpj)) {
    NotificationManager.error('Informações obrigatórias: Nome fantasia, UF e CNPJ.');
    return;
  }

  const urlBase = 'http://localhost:3001/empresas';
  const url = empresa.id ? urlBase + "/" + empresa.id : urlBase;
  const method = empresa.id ? (toDelete ? "DELETE": "PUT") : "POST";

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(empresa)
    });
    
    const data = await response.json();
    setRefetch(true);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default crudEmpresa;
