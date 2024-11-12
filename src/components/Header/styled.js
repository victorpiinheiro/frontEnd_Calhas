import styled from 'styled-components';
import { primaryColor } from '../../config/colors';
import fundo from '../../config/images/background/calhas-backgroud.webp';

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
  background-color: ${primaryColor};
  background-image: url(${fundo});
  background-size: cover;
  background-position: center 15%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    padding: 5px;
    font-size: 18px;
    margin: 0 10px 0 0;
    font-weight: bold;
    text-transform: uppercase;
  }

  a:hover {
    background: ${primaryColor};
    border-radius: 4px;
    transition: all 0.5s ease;
  }
`;
