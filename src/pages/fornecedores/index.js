import React, { useState, useEffect } from 'react';
import {
  Table, 
  TableRow, 
  TableCell, 
  TableBody, 
  TableHead,
} from '@material-ui/core';

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
    <Table>
      <TableHead>
        <TableRow>
          <TableCell> Nome </TableCell>
          <TableCell> Email </TableCell>
          <TableCell> CPF/CNJP </TableCell>
          <TableCell> RG </TableCell>
          <TableCell> Data de Nascimento </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {fornecedores.length > 0 ? (
          fornecedores.map(fornecedore => (
            <TableRow /*onClick={() => {history.push('/questionBank');}}*/>
              <TableCell>{fornecedore.nome}</TableCell>
              <TableCell>{fornecedore.email}</TableCell>
              <TableCell>{fornecedore.cpf_cnpj}</TableCell>
              <TableCell>{fornecedore.rg}</TableCell>
              <TableCell>{fornecedore.nascimento}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={10} align="center">
              Nenhuma fornecedor cadastrado.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default Fornecedores;
