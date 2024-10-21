import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Container } from '../../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../../services/axios';

export default function CadastroCliente() {
  return (
    <Container>
      <Form>
        <label htmlFor="name">
          Nome:
          <input type="text" placeholder="Digite Nome" />
        </label>
        <label htmlFor="adress">
          Endereço:
          <input type="text" placeholder="Endereço" />
        </label>
        <label htmlFor="phone">
          Telefome:
          <input type="text" placeholder="Telefone" />
        </label>
        <label htmlFor="email">
          email:
          <input type="text" placeholder="Email" />
        </label>

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
