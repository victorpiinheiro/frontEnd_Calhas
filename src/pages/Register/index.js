// hooks e avisos
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

// styles
import { Form, Container } from './styled';

// services
import axios from '../../services/axios';

export default function Register() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      return toast.error('Há algum campo vazio');
    }
    if (formData.password !== formData.confirmPass) {
      return toast.error('As senhas precisam ser iguais');
    }

    try {
      await axios.post('/users', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success('Cadastro realizado com sucesso');
      history.push('/login');
    } catch (err) {
      toast.error('erro ao tentar logar', err.responnse);
      console.log('seu erro:', err.response);
    }
  };

  return (
    <Container>
      <h1>Cadastre-se</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome Completo
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          senha:
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </label>
        <label htmlFor="confirmPass">
          Confirma sua senha:
          <input
            id="confirmPass"
            name="confirmPass"
            type="password"
            value={formData.confirmPass}
            onChange={handleChange}
            autoComplete="confirm-password"
          />
        </label>

        <button type="submit">Cadastrar</button>
      </Form>

      <p>
        Ja tem registro ? <a href="/login">Faça o Login</a>
      </p>
    </Container>
  );
}
