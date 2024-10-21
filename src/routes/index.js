import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Orders from '../pages/Orders';
import Funcionarios from '../pages/Funcionarios';
import Funcionario from '../pages/funcionario';
import Clientes from '../pages/Clientes';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute exact path="/funcionarios" component={Funcionarios} />
      <MyRoute exact path="/funcionarios/cadastrar" component={Funcionario} />
      <MyRoute exact path="/funcionarios/cadastrar" component={Funcionario} />
      <MyRoute exact path="/clientes/cadastrar" component={Clientes} />
      <MyRoute exact path="/clientes" component={Clientes} />

      <MyRoute exact path="/orders" component={Orders} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
