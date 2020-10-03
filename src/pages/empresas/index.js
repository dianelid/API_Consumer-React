import React, { useState, useEffect } from 'react';
import {
  Table, 
  TableRow, 
  TableCell, 
  TableBody, 
  TableHead,
} from '@material-ui/core';

const Empresas = () => {

  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    getEmpresas();
  }, [setEmpresas]);

  const getEmpresas = async () => {
    try {
      const response = await fetch('http://localhost:3000/empresas');
      const data = await response.json();

      setEmpresas(data);
    } catch (error) {
      console.log(error);
    }
  }

  // if (!empresas.data) {
  //   return <Container><LinearProgress /></Container>;
  // }

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
            <TableRow /*onClick={() => {history.push('/questionBank');}}*/>
              <TableCell>{empresa.nomeFantasia}</TableCell>
              <TableCell>{empresa.uf}</TableCell>
              <TableCell>{empresa.cnpj}</TableCell>
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

export default Empresas;
