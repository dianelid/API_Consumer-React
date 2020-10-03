import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  DialogActions,
  Button,
  IconButton,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import CloseIcon from '@material-ui/icons/Close';
import { bool, func, string, shape } from 'prop-types';
import saveFornecedor from './saveFornecedor';

const ModalFornecedor = ({ fornecedor, setFornecedor, modalFornecedorOpen, setModalFornecedorOpen }) => {

  const renderContent = () => {
    return (
      <Grid item xs={12} style={{ margin: "0 .375rem" }}>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          name="nome"
          value={(fornecedor && fornecedor.nomeFantasia) || ''}
          onChange={e => setFornecedor({...fornecedor, nomeFantasia: e.target.value})}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          value={(fornecedor && fornecedor.email) || ''}
          onChange={e => setFornecedor({...fornecedor, email: e.target.value})}
        />
        <TextField
          label="CPF / CNPJ"
          variant="outlined"
          fullWidth
          name="cpf_cnpj"
          value={(fornecedor && fornecedor.cpf_cnpj) || ''}
          onChange={e => setFornecedor({...fornecedor, cpf_cnpj: e.target.value})}
        />
        <TextField
          label="CPF / CNPJ"
          variant="outlined"
          fullWidth
          name="rg"
          value={(fornecedor && fornecedor.rg) || ''}
          onChange={e => setFornecedor({...fornecedor, rg: e.target.value})}
        />
        <KeyboardDatePicker
          label="Date de Nascimento"
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          name="nascimento"
          value={(fornecedor && fornecedor.nascimento) || ''}
          onChange={e => setFornecedor({...fornecedor, nascimento: e.target.value})}
        />
      </Grid>
    );
  };

  return (
    <Dialog open={modalFornecedorOpen} onClose={() => setModalFornecedorOpen(false)}>
      <DialogTitle>
        <div className="title">{fornecedor && fornecedor.id ? 'Alterar Empresa' : 'Cadastrar Empresa'}</div>
        <IconButton onClick={() => setModalFornecedorOpen(false)}><CloseIcon /></IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} style={{height: "100%"}}>{renderContent()}</Grid>
      </DialogContent>
      <DialogActions style={{padding: ".5rem 1.75rem"}}>
        <Grid container spacing={2} justify="flex-end">
          <Grid item>
            <Button variant="outlined" color="primary" onClick={() => {saveFornecedor(fornecedor); setModalFornecedorOpen(false);}}>
              Salvar
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

ModalFornecedor.propTypes = {
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

export default ModalFornecedor;
