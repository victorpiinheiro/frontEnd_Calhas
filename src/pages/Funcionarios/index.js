import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { NovoFuncionario, Table } from './styled';
import axios from '../../services/axios';

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);

  const getFuncionarios = async () => {
    try {
      const response = await axios.get('/funcionarios');
      console.log(response);
      setFuncionarios(response.data);
    } catch (e) {
      console.log(e.response);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/funcionarios/${id}`);
      toast.success('Funcionario deletado com sucesso');

      setFuncionarios(
        funcionarios.filter((funcionario) => funcionario.id !== id)
      );
      getFuncionarios();
    } catch (err) {
      toast.error('erro ao deletar funcionario');
    }
  };

  useEffect(() => {
    getFuncionarios();
  }, []);

  const formatarData = (dataString) => {
    const data = new Date(dataString);
    const dia = String(data.getUTCDate()).padStart(2, '0');
    const mes = String(data.getUTCMonth() + 1).padStart(2, '0');
    const ano = data.getUTCFullYear();

    return `${dia}/${mes}/${ano}`;
  };
  return (
    <Container>
      <h1>Lista de funcionarios</h1>
      <NovoFuncionario>
        <Link to="funcionarios/cadastrar">Cadastrar novo funcionario</Link>
      </NovoFuncionario>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Cargo</th>
            <th>Data da contratação</th>
            <th>Editar/ Ver detalhes</th>
            <th>excluir</th>
          </tr>
        </thead>

        <tbody>
          {funcionarios.map((func) => (
            <tr key={func.id}>
              <td>{func.name}</td>
              <td>{func.email}</td>
              <td>{func.position}</td>
              <td>{formatarData(func.hireDate)}</td>

              <td>
                <Link to={`/funcionarios/edit/${func.id}`}>
                  <FaEdit />
                </Link>
              </td>
              <td>
                <button type="button">
                  <FaTrash onClick={() => handleDelete(func.id)} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
