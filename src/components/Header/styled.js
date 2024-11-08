import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Card = styled.div`
  justify-content: space-between;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 18px;
`;

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;

  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
