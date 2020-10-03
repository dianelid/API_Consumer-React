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
import Fornecedores from '../fornecedores';

const Home = () => {
  const MENU = [{
    id: 1,
    name: 'Empresas',
  }, {
    id: 2,
    name: 'Fornecedores',
  }];

  const [selectedMenu, setSelectedMenu] = useState(1);

  return (
    <Container>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {  }}>
            Cadastrar Empresa
        </Button>
        <Button 
          variant="contained"
          color="primary"
          onClick={() => {  }}>
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
          {selectedMenu === 1 ? <Empresas /> : <Fornecedores />}
        </Grid>
      </Grid>
      {/* <ModalDelete refetch={refetch} /> */}
    </Container>
  );
};

export default Home;
