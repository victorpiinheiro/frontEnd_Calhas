import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/';

import { toast } from 'react-toastify';

import { Container } from '../../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../../services/axios';

export default function FormPedido() {
  const { id } = useParams();
  const history = useHistory();
  const [cliente, setCliente] = useState('');
  const [cpf, setCpf] = useState('');
  const [startCadastro, setStartCadastro] = useState(false);
  const [formData, setFormData] = useState({
    description: '',
    price: '',
    status: '',
    clienteId: '',
  });

  const getClienteFromCpf = async (cpfCliente) => {
    try {
      const response = await axios.get('/clientes');
      const clienteFiltrado = response.data.find(
        (user) => user.cpf === cpfCliente
      );

      if (clienteFiltrado) {
        setCliente(clienteFiltrado.name);
        setFormData((prevState) => ({
          ...prevState,
          clienteId: clienteFiltrado.id,
        }));
      } else {
        setCliente('');
        setFormData((prevState) => ({ ...prevState, clienteId: '' }));
      }

      setStartCadastro(false);
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        await axios.put(`/orders/${id}`, {
          description: formData.description,
          price: parseFloat(formData.price),
          status: formData.status,
          clienteId: formData.clienteId,
        });
        history.push('/pedidos');
        toast.success('Pedido alterado com sucesso');
      } catch (err) {
        console.log('erro ao editar o pedido', err);
      }
    } else {
      try {
        await axios.post('/orders', {
          description: formData.description,
          price: parseFloat(formData.price),
          status: formData.status,
          clienteId: formData.clienteId,
        });
        history.push('/pedidos');
        toast.success('Pedido cadastrado com sucesso');
      } catch (err) {
        console.log('erro ao cadastrar pedido', err);
      }
    }
  };
  const handleChange = async (e) => {
    const { name, value } = e.target;

    setFormData((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  const loadDadosForm = async () => {
    try {
      const orderResponse = await axios.get(`/orders/${id}`);
      const { pedido } = orderResponse.data;

      setFormData({
        description: pedido.description,
        price: pedido.price,
        status: pedido.status,
        clienteId: pedido.clienteId,
      });

      if (pedido.clienteId) {
        const clienteResponse = await axios.get(
          `/clientes/${pedido.clienteId}`
        );
        setCpf(clienteResponse.data.cpf);
        setCliente(clienteResponse.data.name);
      }
    } catch (error) {
      console.log('Erro ao carregar dados do pedido:', error);
    }
  };

  useEffect(() => {
    if (id) {
      loadDadosForm();
    } else if (cpf.length === 11 && startCadastro) {
      getClienteFromCpf(cpf);
    } else if (cpf.length < 11) {
      setCliente('');
      setFormData((prevState) => ({ ...prevState, clienteId: '' }));
    }
  }, [id, cpf, startCadastro]);

  return (
    <Container>
      {id ? <h1>Editar Pedido </h1> : <h1>Novo pedido</h1>}

      <Form onSubmit={handleSubmit}>
        <label htmlFor="cliente">
          Cliente
          <input type="text" value={cliente} disabled />
        </label>
        <label htmlFor="cpf">
          CPF do cliente
          <input
            type="text"
            name="cpf"
            value={cpf}
            onChange={(e) => {
              setCpf(e.target.value);
              setStartCadastro(true);
            }}
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="price">
          Valor
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="status">
          Status
          <select
            name="status"
            id="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="">Selecione uma opção</option>
            <option value="em andamento">Em andamento</option>
            <option value="concluido">Concluído</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </label>

        <button type="submit">{id ? 'Editar' : 'Cadastrar '}</button>
      </Form>
    </Container>
  );
}
