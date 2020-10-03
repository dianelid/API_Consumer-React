import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  Select,
  DialogActions,
  Button,
  IconButton,
  MenuItem,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { bool, func, string, shape } from 'prop-types';
import crudEmpresa from './crudEmpresa';

const ModalEmpresa = ({ empresa, setEmpresa, modalEmpresaOpen, setModalEmpresaOpen }) => {

  const UFs = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", 
    "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  const renderContent = () => {
    return (
      <Grid item xs={12} style={{ margin: "0 .375rem" }}>
        <TextField
          label="Nome Fantasia"
          variant="outlined"
          fullWidth
          name="nomeFantasia"
          value={(empresa && empresa.nomeFantasia) || ''}
          onChange={e => setEmpresa({...empresa, nomeFantasia: e.target.value})}
        />
        <Select
          labelId="UF"
          name="uf"
          value={(empresa && empresa.uf) || ''}
          onChange={e => setEmpresa({...empresa, uf: e.target.value})}
        >
          { UFs.map(uf => (<MenuItem key={uf} value={uf}>{uf}</MenuItem>)) }
        </Select>
        <TextField
          label="CNPJ"
          variant="outlined"
          fullWidth
          name="cnpj"
          value={(empresa && empresa.cnpj) || ''}
          onChange={e => setEmpresa({...empresa, cnpj: e.target.value})}
        />
      </Grid>
    );
  };

  return (
    <Dialog open={modalEmpresaOpen} onClose={() => setModalEmpresaOpen(false)}>
      <DialogTitle>
        <div className="title">{empresa && empresa.id ? 'Alterar Empresa' : 'Cadastrar Empresa'}</div>
        <IconButton onClick={() => setModalEmpresaOpen(false)}><CloseIcon /></IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} style={{height: "100%"}}>{renderContent()}</Grid>
      </DialogContent>
      <DialogActions style={{padding: ".5rem 1.75rem"}}>
        <Grid container spacing={2} justify="flex-end">
          <Grid item>
            <Button variant="outlined" color="primary" onClick={() => {crudEmpresa(empresa); setModalEmpresaOpen(false);}}>
              Salvar
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

ModalEmpresa.propTypes = {
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

export default ModalEmpresa;
