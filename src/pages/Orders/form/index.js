import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useHistory } from 'react-router-dom';
import { Container } from '../../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../../services/axios';

export default function FormPedido() {
  const history = useHistory();

  const [cpf, setCpf] = useState('');
  const [cliente, setCliente] = useState('');
  const [clienteId, setClienteId] = useState('');
  const [price, setprice] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  async function handleChangeCpf(e) {
    try {
      const { data } = await axios.get('/clientes');
      if (!data) {
        toast.error('Nenhum cliente encontrado');
      }

      const resultado = data.filter((clienteCpf) => clienteCpf.cpf === cpf);
      if (resultado.length > 0) {
        setCliente(resultado[0].name);
        setClienteId(resultado[0].id);
      } else {
        setCliente('');
        setClienteId('');
      }
    } catch (err) {
      if (!cpf) toast.error('cliente nao cadastrado');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post('/orders', {
        description,
        price: parseFloat(price),
        status,
        clienteId,
      });
      history.push('/pedidos');
      toast.success('pedido cadastrado com sucesso');
    } catch (err) {
      console.log(
        'erro ao cadastrar pedido',
        err.response ? err.response.data : err.message
      );
    }
  }

  useEffect(() => {
    if (cpf) handleChangeCpf();
  }, [cpf]);

  return (
    <Container>
      <h1>Novo pedido</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="cpf">
          cliente
          <input
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            disabled
          />
        </label>
        <label htmlFor="cpf">
          Cpf cliente
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>
        <label htmlFor="descricao">
          descrição:
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
            onChange={(e) => setprice(e.target.value)}
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
