import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Funcionarios from '../pages/Funcionarios';
import Clientes from '../pages/Clientes';
import Pedidos from '../pages/Orders';
import FormCliente from '../pages/Clientes/form/FormCliente';
import FormFuncionario from '../pages/Funcionarios/forms';
import FormPedido from '../pages/Orders/form';
import Register from '../pages/Register';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      {/* Rotas de Home */}
      <MyRoute exact path="/" component={Home} isClosed />
      {/* Rotas de Login */}
      <MyRoute exact path="/login" component={Login} />
      {/* rotas register */}
      <MyRoute exact path="/register" component={Register} />

      {/* Rotas de clientes */}
      <MyRoute exact path="/clientes/edit/:id" component={FormCliente} />
      <MyRoute exact path="/clientes/cadastrar" component={FormCliente} />
      <MyRoute exact path="/clientes" component={Clientes} isClosed />

      {/* Rotas de Funcionarios */}
      <MyRoute
        exact
        path="/funcionarios/edit/:id"
        component={FormFuncionario}
      />
      <MyRoute
        exact
        path="/funcionarios/cadastrar"
        component={FormFuncionario}
      />
      <MyRoute exact path="/funcionarios" component={Funcionarios} isClosed />

      {/* Rotas de Pedidos */}
      <MyRoute
        exact
        path="/pedidos/cadastrar"
        component={FormPedido}
        isClosed
      />
      <MyRoute exact path="/pedidos" component={Pedidos} isClosed />
      <MyRoute exact path="/pedidos/edit/:id" component={FormPedido} isClosed />

      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
