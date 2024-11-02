import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaUsers,
  FaUser,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Nav, Card } from './styled';

export default function Header() {
  const token = localStorage.getItem('token');

  function logout() {
    localStorage.removeItem('token');
    window.location.reload();
    toast.warning('Voce saiu do sistema');
  }
  return (
    <Nav>
      <Card>Calhas Rafael</Card>
      {!token ? (
        <>
          <Link to="/login">
            <FaUser size={24} />
          </Link>
        </>
      ) : (
        <>
          <Link to="/pedidos">
            <FaHome size={24} />
          </Link>
          <Link to="/">
            <FaHome size={24} />
          </Link>
          <Link to="/clientes">
            <FaUserAlt size={24} />
          </Link>
          <Link to="/funcionarios">
            <FaUsers size={24} />
          </Link>
          <Link to="/login">
            <FaSignInAlt size={24} onClick={logout} />
          </Link>
        </>
      )}
    </Nav>
  );
}
