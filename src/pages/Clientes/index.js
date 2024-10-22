import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { Table, NewCliente } from './styled';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  async function getClientes() {
    const response = await axios.get('/clientes');
    setClientes(response.data);
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`/clientes/${id}`);

      toast.success('Usuario excluido com sucesso');
      getClientes();
    } catch (error) {
      console.log(id);
      console.log(error);
    }
  }

  useEffect(() => {
    getClientes();
  }, []);

  return (
    <Container>
      <h1>Clientes</h1>
      <NewCliente>
        <Link to="/clientes/cadastrar">Cadastrar novo cliente</Link>
      </NewCliente>

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
              <td>{cliente.adress}</td>
              <td>{cliente.phone}</td>

              <td>{cliente.email}</td>
              <td>
                <Link to={`/clientes/edit/${cliente.id}`}>
                  <FaEdit />
                </Link>
              </td>
              <td>
                <button type="button">
                  <FaTrash onClick={() => handleDelete(cliente.id)} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
