import React, { useState } from 'react';
import {
  Container,
  List,
  Grid,  
  Box, 
  ListItem, 
  ListItemText,
  Button,
} from '@material-ui/core';
import Empresas from '../empresas';
import ModalEmpresa from '../empresas/modalEmpresa';
import Fornecedores from '../fornecedores';
import ModalFornecedor from '../fornecedores/modalFornecedor';

const Home = () => {
  const MENU = [{
    id: 1,
    name: 'Empresas',
  }, {
    id: 2,
    name: 'Fornecedores',
  }];

  const [selectedMenu, setSelectedMenu] = useState(1);

  const [modalEmpresaOpen, setModalEmpresaOpen] = useState(false);
  const [modalFornecedorOpen, setModalFornecedorOpen] = useState(false);
  
  const [empresa, setEmpresa] = useState({
    nomeFantasia: '',
    uf: '',
    cnpj: '',
  });

  const [fornecedor, setFornecedor] = useState({
    nome: '',
    email: '',
    cpf_cnpj: '',
    rg: '',
    nascimento: '',
  });

  return (
    <Container>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => { setModalEmpresaOpen(true) }}>
            Cadastrar Empresa
        </Button>
        <Button 
          variant="contained"
          color="primary"
          onClick={() => { setModalFornecedorOpen(true) }}>
            Cadastrar Fornecedor
        </Button>
      </div>
      <Grid container>
        <Grid item xs={2} style={{ minHeight: '70vmin' }}>
          <div style={{ minHeight: '2.6rem', borderBottom: '.0625rem solid #DADADA' }} />
          <Box className="divider">
            <List>
              { MENU.map(m => (
                <ListItem
                  button
                  key={m.id}
                  selected={selectedMenu === m.id}
                  onClick={() => setSelectedMenu(m.id)}
                >
                  <ListItemText style={{ padding: '0.3rem 1rem 0.3rem 1rem' }}>{m.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item className="table" xs={10}>
          {selectedMenu === 1 ? 
          <Empresas 
            modalEmpresaOpen={modalEmpresaOpen}
            setModalEmpresaOpen={setModalEmpresaOpen}
            empresa={empresa}
            setEmpresa={setEmpresa}
          /> : 
          <Fornecedores />}
        </Grid>
      </Grid>
      <ModalEmpresa
        modalEmpresaOpen={modalEmpresaOpen}
        setModalEmpresaOpen={setModalEmpresaOpen}
        empresa={empresa}
        setEmpresa={setEmpresa}
      />
      <ModalFornecedor
        modalFornecedorOpen={modalFornecedorOpen}
        setModalFornecedorOpen={setModalFornecedorOpen}
        fornecedor={fornecedor}
        setFornecedor={setFornecedor}
      />
    </Container>
  );
};

export default Home;
