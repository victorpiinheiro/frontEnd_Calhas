import React, { useEffect, useState } from 'react';
import { FaUsersCog } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Card, ContainerCard } from './styled';

import axios from '../../../services/axios';

export default function DashFuncionario() {
  const [funcAtivos, setFuncAtivos] = useState(0);
  const [funcLicenca, setFuncLicenca] = useState(0);
  const [funcFerias, setFuncFerias] = useState(0);
  const [demissoes, setDemissoes] = useState(0);

  const dataAtual = new Date();

  const dataLimite = new Date();
  dataLimite.setDate(dataAtual.getDate() - 30);

  const getAtivos = async () => {
    const response = await axios.get('/funcionarios');
    const filtraPorAtivos = response.data.filter(
      (user) => user.status === 'ativo'
    );
    const filtraPorLicenca = response.data.filter(
      (user) => user.status === 'licenca'
    );

    const filtraPorFerias = response.data.filter(
      (user) => user.status === 'ferias'
    );

    const filtraDataDemissao = response.data.filter((users) => {
      const filtrados = new Date(users.data_demissao);

      return filtrados >= dataLimite;
    });

    setFuncAtivos(filtraPorAtivos.length);
    setFuncLicenca(filtraPorLicenca.length);
    setFuncFerias(filtraPorFerias.length);
    setDemissoes(filtraDataDemissao.length);
  };

  useEffect(() => {
    getAtivos();
  }, []);
  return (
    <ContainerCard>
      <Card>
        <h1>
          Funcionarios{' '}
          <span>
            <FaUsersCog />
          </span>{' '}
        </h1>

        <h3>
          Ativos: <span>{funcAtivos}</span>
        </h3>
        <h3>
          De Licença: <span>{funcLicenca}</span>
        </h3>
        <h3>
          Em Férias: <span>{funcFerias}</span>
        </h3>
        <h3>
          Demissão (ultimos 30 dias): <span>{demissoes}</span>
        </h3>

        <Link to="/funcionarios/cadastrar">Novo Colaborador</Link>
      </Card>
    </ContainerCard>
  );
}
