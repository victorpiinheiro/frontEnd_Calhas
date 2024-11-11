import React from 'react';

// styles
import { useSelector } from 'react-redux';
import { Container, ContainerCard } from './styled';

// componentes
import DashCliente from '../dashboard/DashCliente/DashCliente';
import DashFuncionario from '../dashboard/DashFuncionarios/DashFuncionarios';
import DashPedidos from '../dashboard/DashPedidos/DashPedidos';

export default function Home() {
  const user = useSelector((state) => state.user.currentUser.email);

  return (
    <Container>
      <ContainerCard>
        <DashCliente />
        <DashFuncionario />
        <DashPedidos />
      </ContainerCard>
    </Container>
  );
}
