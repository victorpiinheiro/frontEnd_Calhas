import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Table, BotaoNovoPedido } from './styled';
import axios from '../../services/axios';

export default function Orders() {
  const [pedidos, setPedidos] = useState([]);

  async function getPedidos() {
    try {
      const response = await axios.get('/orders');

      setPedidos(response.data);
    } catch (err) {
      toast.error('erro ao carregar os pedidos');
    }
  }

  async function deletePedido(id) {
    try {
      await axios.delete(`/orders/${id}`);
      toast.success('Pedido excluido com sucesso');
      getPedidos();
    } catch (err) {
      toast.error('erro ao deletar o pedido');
    }
  }

  useEffect(() => {
    if (pedidos.length > 0) getPedidos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h1>Pedidos</h1>
      <BotaoNovoPedido>
        <Link to="/pedidos/cadastrar">Cadastrar Novo pedido</Link>
      </BotaoNovoPedido>

      <Table>
        <thead>
          <tr>
            <th>nº pedido</th>
            <th>descrição</th>
            <th>data do pedido</th>
            <th>status</th>
            <th>valor</th>
            <th>Editar / Ver Detalhes</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.description}</td>
              <td>{pedido.dataPedido}</td>
              <td>{pedido.status}</td>
              <td>{pedido.price}</td>
              <td>
                <Link to="/orders/edit">
                  <FaEdit />
                </Link>
              </td>
              <td>
                <button type="submit">
                  <FaTrash onClick={() => deletePedido(pedido.id)} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
