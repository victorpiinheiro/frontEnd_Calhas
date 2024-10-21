import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Orders from '../pages/Orders';
import Funcionarios from '../pages/Funcionarios';
import Clientes from '../pages/Clientes';
import FormCadastroCliente from '../pages/Clientes/form/FormCadastroCliente';
import FormCadastroFuncionario from '../pages/Funcionarios/forms';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute exact path="/funcionarios" component={Funcionarios} />
      <MyRoute exact path="/cadastrar" component={FormCadastroFuncionario} />
      <MyRoute
        exact
        path="/clientes/edit/:id"
        component={FormCadastroCliente}
      />
      <MyRoute
        exact
        path="/clientes/cadastrar"
        component={FormCadastroCliente}
      />
      <MyRoute exact path="/clientes" component={Clientes} />

      <MyRoute exact path="/orders" component={Orders} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
