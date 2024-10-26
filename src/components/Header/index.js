import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt, FaUsers } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/clientes">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/funcionarios">
        <FaUsers size={24} />
      </Link>
      <Link to="/orders">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
