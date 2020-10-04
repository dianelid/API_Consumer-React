import React, { useState, useEffect } from 'react';
import {
  Table, 
  TableBody,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { bool, func, string, shape } from 'prop-types';
import crudFornecedor from './crudFornecedor';
import {
  StyledTableCell, StyledTableRow, StyledTableHead,
} from '../home/styles';

const Fornecedores = ({ fornecedor, setFornecedor, setModalFornecedorOpen, refetch, setRefetch }) => {

  const [fornecedores, setFornecedores] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);

  useEffect(() => {
    getFornecedores();
  }, [refetch]);

  const getFornecedores = async () => {
    try {
      const response = await fetch('http://localhost:3001/fornecedores');
      const data = await response.json();

      setFornecedores(data);
      setRefetch(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Table>
        <StyledTableHead>
          <StyledTableRow>
            <StyledTableCell> Nome </StyledTableCell>
            <StyledTableCell> Email </StyledTableCell>
            <StyledTableCell> CPF/CNJP </StyledTableCell>
            <StyledTableCell> RG </StyledTableCell>
            <StyledTableCell> Data de Nascimento </StyledTableCell>
          </StyledTableRow>
        </StyledTableHead>
        <TableBody>
          {fornecedores.length > 0 ? (
            fornecedores.map(fornecedor => (
              <StyledTableRow key={fornecedor.id}>
                <StyledTableCell>{fornecedor.nome}</StyledTableCell>
                <StyledTableCell>{fornecedor.email}</StyledTableCell>
                <StyledTableCell>{fornecedor.cpf_cnpj}</StyledTableCell>
                <StyledTableCell>{fornecedor.rg}</StyledTableCell>
                <StyledTableCell>{fornecedor.nascimento}
                  <IconButton onClick={() => { setFornecedor(fornecedor); setModalFornecedorOpen(true); }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => { setFornecedor(fornecedor); setOpenDelete(true); }}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={10} align="center">
                Nenhuma fornecedor cadastrado.
              </StyledTableCell>
            </StyledTableRow>
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
          <Button onClick={() => {crudFornecedor(fornecedor, setRefetch, openDelete); setOpenDelete(false)}} color="primary" variant="contained">
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
  refetch: bool.isRequired,
  setRefetch: func.isRequired
};

Fornecedores.propTypes = {
  fornecedor: null
}

export default Fornecedores;
