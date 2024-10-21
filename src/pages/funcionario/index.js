import React, { useState } from 'react';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';

import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import history from '../../services/history';

export default function Funcionario() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [hireDate, setHireDate] = useState('');
  const [salary, setSalary] = useState('');

  const [dia, mes, ano] = hireDate.split('/');
  const dateFormatada = `${ano}-${mes}-${dia}`;

  function ClearInput() {
    setHireDate('');
    setName('');
    setPosition('');
    setSalary('');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post('/funcionarios/cadastrar', {
        name,
        position,
        hireDate: dateFormatada,
        salary: parseFloat(salary),
      });

      toast.success('Usuario cadastrado com sucesso');
      ClearInput();
      history.push('/funcionarios');
    } catch (err) {
      toast.error('erro ao cadastrar o usuario');
      console.log('ERRO:', err.response ? err.response.data : err);
    }
  }

  return (
    <Container>
      <h1>Cadastro de Funcionarios</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome do funcionario"
          />
        </label>
        <label htmlFor="position">
          Função:
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Digite a função do funcionario"
          />
        </label>
        Data da contratação:
        <InputMask
          mask="99/99/9999"
          value={hireDate}
          onChange={(e) => setHireDate(e.target.value)}
          placeholder="dd/mm/aaaa"
        />
        <label htmlFor="salary">
          Salario:
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Digite o salario"
          />
        </label>
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
