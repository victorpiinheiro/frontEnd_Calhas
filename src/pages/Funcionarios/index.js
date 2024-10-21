import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';

import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import {
  FuncionarioContainer,
  CadNovoColab,
  FuncionarioCard,
  InfoContainer,
  ButtonContainer,
  Form,
} from './styled';

export default function Funcionarios() {
  const history = useHistory();
  const [funcionarios, setFuncionarios] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [hireDate, setHireDate] = useState('');

  async function getData() {
    try {
      const response = await axios.get('/funcionarios');
      setFuncionarios(response.data);
    } catch (e) {
      console.log('seu erro foi', e);
    }
  }

  function handleEdit(user) {
    const [ano, mes, dia] = user.hireDate.split('T')[0].split('-');
    const formatandoData = `${dia}/${mes}/${ano}`;

    setName(user.name);
    setPosition(user.position);
    setSalary(user.salary);
    setHireDate(formatandoData);

    setEditMode(user.id);
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      'Tem certeza que deseja excluir esse funcionario ?'
    );

    if (!confirmDelete) return;
    try {
      await axios.delete(`/funcionarios/${id}`);
      toast.success('Usuario excluido com sucesso');

      getData();
    } catch (e) {
      toast.error('erro ao excluir o usuario');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const [dia, mes, ano] = hireDate.split('/');
    const hireDateFormatada = new Date(`${ano}-${mes}-${dia}`);
    hireDateFormatada.setHours(12, 0, 0);

    try {
      await axios.put(`/funcionarios/edit/${editMode}`, {
        name,
        position,
        salary: parseFloat(salary),
        hireDate: hireDateFormatada.toISOString(),
      });
      setEditMode(null);

      toast.success('usuario editado com sucesso');
      getData();
    } catch (err) {
      toast.error('Erro ao editar o usuario');
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {editMode ? <h1>Editar funcionario</h1> : <h1>Lista de funcionarios</h1>}
      {editMode ? (
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
          <label htmlFor="salary">
            Salario:
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Digite o salario"
            />
          </label>
          <label htmlFor="hireDate">
            Data da contratação
            <InputMask
              mask="99/99/9999"
              value={hireDate}
              onChange={(e) => setHireDate(e.target.value)}
              placeholder="dd/mm/aaaa"
            />
          </label>
          <button type="submit">Editar Funcionario</button>
        </Form>
      ) : (
        <>
          <CadNovoColab>
            <Link to="/funcionarios/cadastrar">Novo Colaborador</Link>
          </CadNovoColab>
          <FuncionarioContainer>
            {funcionarios.map((funcionario) => (
              <FuncionarioCard key={funcionario.id}>
                <InfoContainer>
                  <p>
                    Nome: <span>{funcionario.name}</span>
                  </p>
                  <p>
                    Setor: <span>{funcionario.position}</span>
                  </p>
                  <p>
                    Salário: <span>{funcionario.salary}</span>
                  </p>
                  <p>
                    Contratado em:{' '}
                    <span>
                      {new Date(funcionario.hireDate).toLocaleDateString(
                        'pt-br'
                      )}
                    </span>
                  </p>
                </InfoContainer>
                <ButtonContainer>
                  <button type="button">
                    <FaEdit onClick={() => handleEdit(funcionario)} />
                  </button>

                  <button type="button">
                    <FaTrash onClick={() => handleDelete(funcionario.id)} />
                  </button>
                </ButtonContainer>
              </FuncionarioCard>
            ))}
          </FuncionarioContainer>
        </>
      )}
    </Container>
  );
}
