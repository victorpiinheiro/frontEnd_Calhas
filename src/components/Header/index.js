import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaUsers,
  FaUser,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Nav, Card } from './styled';

import { logout } from '../../store/modules/User/actions';

export default function Header() {
  const user = useSelector((state) => state.user.currentUser);
  const dispath = useDispatch();

  function handleLogout() {
    dispath(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('User');
  }
  return (
    <Nav>
      <Card>Calhas </Card>
      {!user ? (
        <>
          <Link to="/login">
            <FaUser size={24} />
          </Link>
        </>
      ) : (
        <>
          <Link to="/">Home</Link>
          <Link to="/pedidos">Pedidos</Link>
          <Link to="/clientes">Clientes</Link>
          <Link to="/funcionarios">Funcionarios</Link>
          <Link to="/login">
            <FaSignInAlt size={24} onClick={handleLogout} />
          </Link>
        </>
      )}
    </Nav>
  );
}
