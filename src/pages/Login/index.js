import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Form, Container } from './styled';
import axios from '../../services/axios';
import { loginRequest } from '../../store/modules/User/actions';

export default function Login() {
  const dispath = useDispatch();

  const history = useHistory();
  const [formValues, setFormValue] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValue({
      ...formValues,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post('/tokens', formValues);
      localStorage.setItem('token', data.token);
      localStorage.setItem('User', formValues.email);

      dispath(loginRequest({ email: formValues.email }));
      history.push('/home');

      toast.success('Usuario logado com sucesso');
    } catch (err) {
      setFormValue({
        email: '',
        password: '',
      });
      toast.error('Usuario ou senha invalidos');
    }
  }

  return (
    <Container>
      <h1>Entre no sistema</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="user">
          E-mail:
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formValues.email}
            autoComplete="current-email"
          />
        </label>
        <label htmlFor="password">
          senha:
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formValues.password}
            autoComplete="current-password"
          />
        </label>

        <button type="submit">Entrar</button>
      </Form>

      <p>
        Ainda nao tem cadastro ? <a href="/">Registre-se</a>
      </p>
    </Container>
  );
}
