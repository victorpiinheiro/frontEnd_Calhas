import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import { Table } from './styled';

export default function Clientes() {
  const clientes = [
    {
      name: 'Victor pinheiro ',
      email: 'teste@gmail.com',
      phone: '11932125861',
      address: 'rua A jewbfjew bfewjbf fbewjf 121',
    },
    {
      name: 'Jose preira de lima Filho ',
      email: 'testeewjfuef@gmail.com',
      phone: '11932125861',
      address: 'rua A ddddd bfewjbf fbewjf 121',
    },
  ];

  return (
    <Container>
      <h1>Clientes</h1>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereço</th>
            <th>telefone</th>
            <th>email</th>
            <th>editar</th>
            <th>excluir</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.name}</td>
              <td>{cliente.address}</td>
              <td>{cliente.phone}</td>
              <td>{cliente.email}</td>
              <td>
                <button type="button">
                  <FaEdit />
                </button>
              </td>
              <td>
                <button type="button">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
