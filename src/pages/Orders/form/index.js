import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';
import { Container } from '../../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../../services/axios';

export default function FormPedido() {
  const history = useHistory();
  const { id } = useParams();
  const idNumber = Number(id);

  const [cpf, setCpf] = useState('');
  const [cliente, setCliente] = useState('');
  const [clienteId, setClienteId] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const filtraClientePorId = async (id) => {
    try {
      const response = await axios.get('/clientes');
      console.log(response.data[0]);

      const clientesFiltrados = response.data.filter(
        (allCliente) => allCliente.id === Number(id)
      );

      console.log('meu filtro', clientesFiltrados);
    } catch (err) {
      console.error('erro ao bsucar clientes:', err);
    }
  };

  filtraClientePorId(id);

  const handleChangeCpf = useCallback(async () => {
    try {
      if (cpf.length === 11) {
        const { data } = await axios.get('/clientes');
        if (!data) {
          toast.error('Nenhum cliente encontrado');
        }

        const resultado = data.filter((clienteCpf) => clienteCpf.cpf === cpf);
        console.log(resultado);

        if (resultado.length > 0) {
          setCliente(resultado[0].name);
          setClienteId(resultado[0].id);
        }
      } else {
        setCliente('');
        setClienteId('');
      }
    } catch (err) {
      if (!cpf) toast.error('Cliente não cadastrado');
    }
  }, [cpf]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/orders', {
        description,
        price: parseFloat(price),
        status,
        clienteId,
      });
      history.push('/pedidos');
      toast.success('Pedido cadastrado com sucesso');
    } catch (err) {
      if (!clienteId)
        toast.error('O pedido deve estar vinculado a algum cliente');
      console.log('Erro ao cadastrar pedido', err.response);
    }
  };

  useEffect(() => {
    if (cpf) handleChangeCpf();
  }, [cpf, handleChangeCpf]);

  return (
    <Container>
      <h1>Novo pedido</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="cliente">
          Cliente
          <input
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            disabled
          />
        </label>
        <label htmlFor="cpf">
          CPF do cliente
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label htmlFor="price">
          Valor
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label htmlFor="status">
          Status
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
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
