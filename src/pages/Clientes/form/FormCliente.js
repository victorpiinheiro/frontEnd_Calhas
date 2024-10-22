import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Container } from '../../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../../services/axios';

export default function FormCliente() {
  const history = useHistory();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  async function loadClient() {
    try {
      const { data } = await axios.get(`/clientes/${id}`);
      setName(data.user.name);
      setAdress(data.user.adress);
      setPhone(data.user.phone);
      setEmail(data.user.email);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (id) {
      loadClient();
    }
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (id) {
      try {
        await axios.put(`/clientes/${id}`, {
          name,
          phone,
          adress,
          email,
        });
        toast.success('Cliente editado com sucesso');
        history.push('/clientes');
      } catch (error) {
        toast.error('Erro ao editar Cliente');
      }
    } else {
      try {
        await axios.post('/clientes/cadastrar', {
          name,
          adress,
          phone,
          email,
        });
        toast.success('Usuario cadastrado com sucesso');
        history.push('/clientes');
      } catch (err) {
        toast.error('erro ao tentar cadastrar');
        console.log(err);
      }
    }
  }

  return (
    <Container>
      {id ? <h1>Editar Cliente</h1> : <h1>Cadastrar cliente</h1>}
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

        <button type="submit">{id ? 'Editar' : 'Cadastrar'} </button>
      </Form>
    </Container>
  );
}
