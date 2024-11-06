import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/';

import { toast } from 'react-toastify';
import { Container } from '../../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../../services/axios';

export default function FormPedido() {
  const history = useHistory();
  const [cliente, setCliente] = useState('');
  const [cpf, setCpf] = useState([]);
  const [formData, setFormData] = useState({
    description: '',
    price: '',
    status: '',
    clienteId: '',
  });

  const getClienteFromCpf = async (cpfCliente) => {
    try {
      const response = await axios.get('/clientes');
      const clienteFiltrado = response.data.filter(
        (user) => user.cpf === cpfCliente
      );

      if (clienteFiltrado) {
        setCliente(clienteFiltrado[0].name);

        setFormData((prevState) => ({
          ...prevState,
          clienteId: clienteFiltrado[0].id,
        }));
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };
  const handleChange = async (e) => {
    const { name, value } = e.target;

    setFormData((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (cpf.length === 11) {
      getClienteFromCpf(cpf);
    } else {
      setCliente('');
    }
  }, [cpf]);

  return (
    <Container>
      <h1>Novo pedido</h1>

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
            onChange={(e) => setCpf(e.target.value)}
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
            <option value="Em andamento">Em andamento</option>
            <option value="Concluído">Concluído</option>
            <option value="Cancelado">Cancelado</option>
          </select>
        </label>

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
