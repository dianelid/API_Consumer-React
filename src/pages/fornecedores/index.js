import React, { useState, useEffect } from 'react';
import {
  Table, 
  TableRow, 
  TableCell, 
  TableBody, 
  TableHead,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { func, string, shape } from 'prop-types';
import crudFornecedor from './crudFornecedor';

const Fornecedores = ({ fornecedor, setFornecedor, setModalFornecedorOpen }) => {

  const [fornecedores, setFornecedores] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);

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
    <>
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
            fornecedores.map(fornecedor => (
              <TableRow key={fornecedor.id}>
                <TableCell>{fornecedor.nome}</TableCell>
                <TableCell>{fornecedor.email}</TableCell>
                <TableCell>{fornecedor.cpf_cnpj}</TableCell>
                <TableCell>{fornecedor.rg}</TableCell>
                <TableCell>{fornecedor.nascimento}
                  <IconButton onClick={() => { setFornecedor(fornecedor); setModalFornecedorOpen(true); }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => { setFornecedor(fornecedor); setOpenDelete(true); }}>
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
      <Dialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
      >
        <DialogTitle>{"Remover Fornecedor"}</DialogTitle>
        <DialogContent>
          Tem certeza que deseja remover este fornecedor?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {crudFornecedor(fornecedor, openDelete); setOpenDelete(false)}} color="primary" variant="contained">
            Remover
          </Button>
          <Button onClick={() => setOpenDelete(false)} color="primary" variant="contained">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
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
  }),
  setFornecedor: func.isRequired,
  setModalFornecedorOpen: func.isRequired,
};

Fornecedores.propTypes = {
  fornecedor: null
}

export default Fornecedores;
