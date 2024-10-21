import React, { useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Orders() {
  const [descricao, setDescricao] = useState('');

  return (
    <Container>
      <h1>Lançar Serviço</h1>

      <Form>
        <label htmlFor="descricao">
          Cliente
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="descricao"
          />
        </label>
        <label htmlFor="preco">
          Preco
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="descricao"
          />
        </label>
        <label htmlFor="descricao">
          tipo de serviço
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="descricao"
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type=""
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="descricao"
          />
        </label>

        <button type="submit">Cadastrar serviço</button>
      </Form>
    </Container>
  );
}
