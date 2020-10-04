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
import crudEmpresa from './crudEmpresa';
import {
  StyledTableCell, StyledTableRow, StyledTableHead,
} from '../home/styles';

const Empresas = ({ empresa, setEmpresa, setModalEmpresaOpen, refetch, setRefetch }) => {

  const [empresas, setEmpresas] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  

  useEffect(() => {
    getEmpresas();
  }, [refetch]);

  const getEmpresas = async () => {
    try {
      const response = await fetch('http://localhost:3001/empresas');
      const data = await response.json();
      console.log(data);
      setEmpresas(data);
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
            <StyledTableCell> Nome Fantasia </StyledTableCell>
            <StyledTableCell> UF </StyledTableCell>
            <StyledTableCell> CNPJ </StyledTableCell>
          </StyledTableRow>
        </StyledTableHead>
        <TableBody>
          {empresas.length > 0 ? (
            empresas.map(empresa => (
              <StyledTableRow key={empresa.id}>
                <StyledTableCell>{empresa.nomeFantasia}</StyledTableCell>
                <StyledTableCell>{empresa.uf}</StyledTableCell>
                <StyledTableCell>
                  {empresa.cnpj}
                  <IconButton onClick={() => { setEmpresa(empresa); setModalEmpresaOpen(true); }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => { setEmpresa(empresa); setOpenDelete(true); }}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={10} align="center">
                Nenhuma empresa cadastrada.
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
      <Dialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
      >
        <DialogTitle>{"Remover Empresa"}</DialogTitle>
        <DialogContent>
          Tem certeza que deseja remover esta empresa?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {crudEmpresa(empresa, setRefetch, openDelete); setOpenDelete(false)}} color="primary" variant="contained">
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

Empresas.propTypes = {
  empresa: shape({
    id: string,
    nomeFantasia: string,
    uf: string,
    cnpj: string,
  }),
  setEmpresa: func.isRequired,
  setModalEmpresaOpen: func.isRequired,
  refetch: bool.isRequired,
  setRefetch: func.isRequired
};

Empresas.defaultProps = {
  empresa: null
};

export default Empresas;
