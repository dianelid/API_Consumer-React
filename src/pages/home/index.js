import React, { useState } from 'react';
import {
  Grid,  
  Box, 
  ListItem, 
  ListItemText,
} from '@material-ui/core';
import Empresas from '../empresas';
import ModalEmpresa from '../empresas/modalEmpresa';
import Fornecedores from '../fornecedores';
import ModalFornecedor from '../fornecedores/modalFornecedor';
import {
  StyledContainer,
  StyledContent as Container,
  StyledList as List,
  StyledActionButton as Button,
} from './styles';

const Home = () => {
  const MENU = [{
    id: 1,
    name: 'Empresas',
  }, {
    id: 2,
    name: 'Fornecedores',
  }];

  const [selectedMenu, setSelectedMenu] = useState(1);
  const [refetch, setRefetch] = useState(true);
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
    <StyledContainer maxWidth="lg">
      <Container>
        <Grid container>
          <Grid item xs={2} style={{ minHeight: '70vmin' }}>
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
          <Grid item xs={10}>
            {selectedMenu === 1 ? 
            <Empresas 
              empresa={empresa} 
              setModalEmpresaOpen={setModalEmpresaOpen} 
              setEmpresa={setEmpresa} 
              refetch={refetch} 
              setRefetch={setRefetch} 
            /> : 
            <Fornecedores 
              fornecedor={fornecedor} 
              setModalFornecedorOpen={setModalFornecedorOpen} 
              setFornecedor={setFornecedor} 
              refetch={refetch} 
              setRefetch={setRefetch}
            />}
          </Grid>
        </Grid>
        <ModalEmpresa
          modalEmpresaOpen={modalEmpresaOpen}
          setModalEmpresaOpen={setModalEmpresaOpen}
          empresa={empresa}
          setEmpresa={setEmpresa}
          setRefetch={setRefetch}
        />
        <ModalFornecedor
          modalFornecedorOpen={modalFornecedorOpen}
          setModalFornecedorOpen={setModalFornecedorOpen}
          fornecedor={fornecedor}
          setFornecedor={setFornecedor}
          setRefetch={setRefetch}
        />
      </Container>
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
    </StyledContainer>
  );
};

export default Home;
