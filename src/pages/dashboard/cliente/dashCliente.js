import React, { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Card, ContainerCard } from './styled';

import axios from '../../../services/axios';

export default function DashCliente() {
  const [totalCliente, setTotalClientes] = useState(0);
  const [novosClientes, setNovosClientes] = useState(0);

  const dataAtual = new Date();

  const dataLimite = new Date();
  dataLimite.setDate(dataAtual.getDate() - 7);

  const getNovosClintes = async () => {
    try {
      const response = await axios.get('/clientes');
      const usuarioFiltrados = response.data.filter((usuario) => {
        const filtrados = new Date(usuario.createdAt);
        return filtrados >= dataLimite;
      });
      setNovosClientes(usuarioFiltrados.length);
    } catch (err) {
      console.log(err.response);
    }
  };

  const getTotalClientes = async () => {
    try {
      const response = await axios.get('/clientes');

      setTotalClientes(response.data.length);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getTotalClientes();
    getNovosClintes();
  }, []);

  return (
    <ContainerCard>
      <Card>
        <h1>
          clientes{' '}
          <span>
            <FaUsers />
          </span>{' '}
        </h1>

        <h3>total de clientes: {totalCliente}</h3>
        <h3>Novos Clientes(Ultimos 7 dias): {novosClientes} </h3>
        <Link to="/clientes/cadastrar">cadastrar novo cliente</Link>
      </Card>
    </ContainerCard>
  );
}
