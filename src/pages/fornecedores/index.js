import React, { useState, useEffect } from 'react';
import {
  Table, 
  TableRow, 
  TableCell, 
  TableBody, 
  TableHead,
  IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { bool, func, string, shape } from 'prop-types';

const Fornecedores = ({ fornecedor, setFornecedor, modalFornecedorOpen, setModalFornecedorOpen }) => {

  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    getFornecedores();
  }, [setFornecedores]);

  const getFornecedores = async () => {
    try {
      const response = await fetch('http://localhost:3001/fornecedores');
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
            <TableRow>
              <TableCell>{fornecedore.nome}</TableCell>
              <TableCell>{fornecedore.email}</TableCell>
              <TableCell>{fornecedore.cpf_cnpj}</TableCell>
              <TableCell>{fornecedore.rg}</TableCell>
              <TableCell>{fornecedore.nascimento}
                <IconButton onClick={() => { setFornecedor(fornecedor); setModalFornecedorOpen(true); }}>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
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

Fornecedores.propTypes = {
  fornecedor: shape({
    id: string,
    nome: string,
    email: string,
    cpf_cnpj: string,
    rg: string,
    nascimento: string,
  }).isRequired,
  setFornecedor: func.isRequired,
  modalFornecedorOpen: bool.isRequired,
  setModalFornecedorOpen: func.isRequired,
};

export default Fornecedores;
