import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Container } from '../../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../../services/axios';

export default function CadastroCliente() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const { id } = useParams();

  async function loadClient() {
    try {
      const { data } = await axios.get(`/clientes/${id}`);
      setName(data.user.name);
      setAdress(data.user.adress);
      setPhone(data.user.phone);
      setEmail(data.user.email);
    } catch (e) {
      toast.error('erro ao carregar os usuarios');
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !adress || !email) {
      return toast.warning('Todos os campos devem ser preenchidos');
    }
    try {
      if (id) {
        await axios.put(`/clientes/${id}`, {
          name,
          phone,
          adress,
          email,
        });

        toast.success('Usuario editado com sucesso');
        history.push('/clientes');
      } else {
        await axios.post('/clientes', {
          name,
          phone,
          adress,
          email,
        });
        toast.success('Usuario cadastrado com sucesso');
        history.push('/clientes');
      }
    } catch (err) {
      toast.error('erro ao cadastrar o usuario');
      history.push('/');
    }
  };

  useEffect(() => {
    if (id) {
      loadClient();
    }
  }, [id, loadClient]);

  return (
    <Container>
      {id ? <h1>Editar de Cliente</h1> : <h1>Cadastro de Cliente</h1>}
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite Nome"
          />
        </label>
        <label htmlFor="adress">
          Endereço:
          <input
            type="text"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            placeholder="Endereço"
          />
        </label>
        <label htmlFor="phone">
          Telefome:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefone"
          />
        </label>
        <label htmlFor="email">
          email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
