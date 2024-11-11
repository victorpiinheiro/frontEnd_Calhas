import React, { useEffect, useState } from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Card, ContainerCard } from './styled';

import axios from '../../../services/axios';

export default function DashCliente() {
  const [totalPedidos, setTotalPedidos] = useState(0);

  const dataAtual = new Date();
  const getDiasCorridos = dataAtual.getDate();
  const getHoras = dataAtual.getHours();
  const dataLimite = new Date();
  dataLimite.setDate(dataAtual.getDate() - getDiasCorridos);

  const getPedidos = async () => {
    try {
      const { data } = await axios.get('/orders');

      console.log(data);
      console.log(totalPedidos);
    } catch (err) {}
  };

  useEffect(() => {
    getPedidos();
  }, []);
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
          Concluidos: <span>{}</span>
        </h3>
        <h3>
          Em andamento: <span>{}</span>
        </h3>
        <h3>
          Valor total: <span>{}</span>
        </h3>
        <Link to="/clientes/cadastrar">Novo Pedido</Link>
      </Card>
    </ContainerCard>
  );
}
