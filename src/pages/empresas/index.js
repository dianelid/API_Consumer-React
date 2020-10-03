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
import crudEmpresa from './crudEmpresa';

const Empresas = ({ empresa, setEmpresa, setModalEmpresaOpen }) => {

  const [empresas, setEmpresas] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);

  useEffect(() => {
    getEmpresas();
  }, [setEmpresas]);

  const getEmpresas = async () => {
    try {
      const response = await fetch('http://localhost:3001/empresas');
      const data = await response.json();

      setEmpresas(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> Nome Fantasia </TableCell>
            <TableCell> UF </TableCell>
            <TableCell> CNPJ </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {empresas.length > 0 ? (
            empresas.map(empresa => (
              <TableRow key={empresa.id}>
                <TableCell>{empresa.nomeFantasia}</TableCell>
                <TableCell>{empresa.uf}</TableCell>
                <TableCell>
                  {empresa.cnpj}
                  <IconButton onClick={() => { setEmpresa(empresa); setModalEmpresaOpen(true); }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => { setEmpresa(empresa); setOpenDelete(true); }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={10} align="center">
                Nenhuma empresa cadastrada.
              </TableCell>
            </TableRow>
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
          <Button onClick={() => {crudEmpresa(empresa, openDelete); setOpenDelete(false)}} color="primary" variant="contained">
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
};

Empresas.defaultProps = {
  empresa: null
};

export default Empresas;
