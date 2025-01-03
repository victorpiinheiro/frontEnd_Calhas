import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import { Form } from './styled';
import { Container } from '../../../styles/GlobalStyles';
import axios from '../../../services/axios';

export default function FormFuncionarios() {
  const history = useHistory();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    hireDate: '',
    salary: '',
    phone: '',
    address: '',
    data_demissao: '',
    data_nascimento: '',
    departamento: '',
    email: '',
    status: '',
    observacoes: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'salary' ? parseFloat(value) || 0 : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (id) {
      try {
        await axios.put(`/funcionarios/edit/${id}`, formData);
        toast.success('Funcionario editado com sucesso');

        history.push('/funcionarios');

        console.log('Dados cadastrados:', formData);
      } catch (err) {
        toast.error('error as editar funcionario');
      }
    } else {
      try {
        const response = await axios.post('/funcionarios/cadastrar', formData);
        history.push('/funcionarios');
      } catch (error) {
        console.log('estou aqui', error.response);
      }
    }
  }
  function formatDate(dateString) {
    if (!dateString) return '';
    return dateString.split('T')[0];
  }

  async function loadingFuncionarios() {
    const { data } = await axios.get(`/funcionarios/${id}`);
    if (!data) return;
    setFormData({
      ...data.user,
      hireDate: formatDate(data.user.hireDate) || '',
      data_nascimento: formatDate(data.user.data_nascimento) || '',
      data_demissao: formatDate(data.user.data_demissao) || '',
      email: data.user.email || '',
      observacoes: data.user.observacoes || '',
    });
  }

  useEffect(() => {
    if (id) {
      loadingFuncionarios();
    }
  }, [id]);

  return (
    <Container>
      <h1>{id ? 'Editar Funcionario' : 'Cadastrar Funcionario'}</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome Completo
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="data_nascimento">
          Data Nascimento:
          <input
            type="date"
            name="data_nascimento"
            value={formData.data_nascimento}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="departamento">
          Departamento:
          <select
            name="departamento"
            id="departamento"
            value={formData.departamento}
            onChange={handleChange}
          >
            <option value="">Selecione uma opção</option>
            <option value="RH">Recursos Humanos</option>
            <option value="comercial">Comercial</option>
            <option value="obra">Obras</option>
          </select>
        </label>
        <label htmlFor="position">
          Cargo
          <select
            name="position"
            id="position"
            value={formData.position}
            onChange={handleChange}
          >
            <option value="">Selecione uma opção</option>
            <option value="recepcionista">Recepcionista</option>
            <option value="ajudante">Ajudante</option>
            <option value="vendedor">Vendedor</option>
            <option value="instalador">Instalador</option>
          </select>
        </label>
        <label htmlFor="salary">
          salario:
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="hireDate">
          Contratado em:
          <input
            type="date"
            name="hireDate"
            value={formData.hireDate}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="data_demissao">
          Data Demissão:
          <input
            type="date"
            name="data_demissao"
            value={formData.data_demissao}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="status">
          Status:
          <select
            name="status"
            id="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="">Clique para escolher</option>
            <option value="ativo">Ativo</option>
            <option value="ferias">Ferias</option>
            <option value="licenca">Licença</option>
            <option value="demitido">Demititdo</option>
          </select>
        </label>
        <label htmlFor="observacoes">
          Observacoes:
          <input
            type="text"
            name="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
          />
        </label>

        <button type="submit"> {id ? 'Editar' : 'Cadastrar'}</button>
      </Form>
    </Container>
  );
}
