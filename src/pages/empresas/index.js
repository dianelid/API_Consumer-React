import React, { useState, useEffect } from 'react';
import {
  Table, 
  TableRow, 
  TableCell, 
  TableBody, 
  TableHead,
  IconButton,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { bool, func, string, shape } from 'prop-types';

const Empresas = ({ empresa, setEmpresa, modalEmpresaOpen, setModalEmpresaOpen }) => {

  const [empresas, setEmpresas] = useState([]);

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
            <TableRow>
              <TableCell>{empresa.nomeFantasia}</TableCell>
              <TableCell>{empresa.uf}</TableCell>
              <TableCell>
                {empresa.cnpj}
                <IconButton onClick={() => { setEmpresa(empresa); setModalEmpresaOpen(true); }}>
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
              Nenhuma empresa cadastrada.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

Empresas.propTypes = {
  empresa: shape({
    id: string,
    nomeFantasia: string,
    uf: string,
    cnpj: string,
  }).isRequired,
  setEmpresa: func.isRequired,
  modalEmpresaOpen: bool.isRequired,
  setModalEmpresaOpen: func.isRequired,
};

export default Empresas;
