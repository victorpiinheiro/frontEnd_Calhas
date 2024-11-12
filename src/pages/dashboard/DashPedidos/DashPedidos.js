import React, { useEffect, useState } from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Card, ContainerCard } from './styled';

import axios from '../../../services/axios';

export default function DashCliente() {
  const [totalPedidos, setTotalPedidos] = useState(0);
  const [totalConcluidos, setTotalConcluidos] = useState(0);
  const [totalAndamentos, setTotalAndamentos] = useState(0);
  const [totalValores, setTotalValores] = useState(0);

  const dataAtual = new Date();
  const dataLimite = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);

  const filtraPedidosMes = (pedidos) => {
    return pedidos.filter((pedido) => {
      const dataPedido = new Date(pedido.dataPedido);
      return dataPedido >= dataLimite;
    });
  };

  const filtraPedidoConcluido = (pedidos) => {
    return pedidos.filter((pedido) => {
      const dadosFiltrados = new Date(pedido.dataPedido);
      return dadosFiltrados >= dataLimite && pedido.status === 'concluido';
    });
  };
  const filtraPedidoAndamento = (pedidos) => {
    return pedidos.filter((pedido) => {
      const dadosFiltrados = new Date(pedido.dataPedido);
      return dadosFiltrados >= dataLimite && pedido.status === 'em andamento';
    });
  };

  const filtraValor = (pedidos) => {
    return pedidos.reduce((acc, pedido) => {
      const dadosFiltrados = new Date(pedido.dataPedido);

      if (dadosFiltrados >= dataLimite) {
        return acc + pedido.price;
      }
      return acc;
    }, 0);
  };

  const getPedidos = async () => {
    try {
      const { data } = await axios.get('/orders');
      const totalPedidoMes = filtraPedidosMes(data);
      const totalConcluidoMes = filtraPedidoConcluido(data);
      const totalAndamentoMes = filtraPedidoAndamento(data);
      const totalDeValores = filtraValor(data);

      setTotalPedidos(totalPedidoMes.length);
      setTotalConcluidos(totalConcluidoMes.length);
      setTotalAndamentos(totalAndamentoMes.length);
      setTotalValores(totalDeValores);
    } catch (err) {
      console.log('erro ao carregar o pedido', err);
    }
  };

  useEffect(() => {
    getPedidos();
  }, []);

  const formtPrice = (price) => {
    return price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  return (
    <ContainerCard>
      <Card>
        <h1>
          Pedidos{' '}
          <span>
            <FaMoneyBillAlt />
          </span>{' '}
        </h1>

        <h3>
          Total de Pedidos no mês: <span>{totalPedidos}</span>
        </h3>
        <h3>
          Concluidos: <span>{totalConcluidos}</span>
        </h3>
        <h3>
          Em andamento: <span>{totalAndamentos}</span>
        </h3>
        <h3>
          Valor total: <span> {formtPrice(totalValores)}</span>
        </h3>
        <Link to="/pedidos/cadastrar">Novo Pedido</Link>
      </Card>
    </ContainerCard>
  );
}
