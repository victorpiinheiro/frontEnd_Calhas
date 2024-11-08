import React, { useState } from 'react';

// styles
import { useSelector } from 'react-redux';
import { Container } from './styled';

// componentes
import DashCliente from '../dashboard/cliente/dashCliente';

export default function Home() {
  const user = useSelector((state) => state.user.currentUser.email);

  return (
    <Container>
      <h1>Olá {user}</h1>
      <DashCliente />
    </Container>
  );
}
