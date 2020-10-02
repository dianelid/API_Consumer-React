import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import Home from './pages/empresas';
import Fornecedores from './pages/fornecedores';

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_URI}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/fornecedores" component={Fornecedores} />
        <Route render={() => <h1>Página não encontrada! :(</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default withRouter(Routes);
