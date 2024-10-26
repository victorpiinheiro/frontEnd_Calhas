import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;

  thead {
    background-color: #f4f4f4;
    width: 100%;
  }
  th {
    gap: initial;
    padding: 10px 20px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    border-bottom: 1px solid #ddd;
    background-color: #f4f4f4;
  }
  td {
    padding: 15px;
    border-bottom: 1px solid #ddd;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const NovoFuncionario = styled.div`
  background: ${colors.primaryColor};
  max-width: fit-content;
  height: 40px;
  border-radius: 4px;
  margin-top: 15px;
  margin-left: auto;

  a {
    display: flex;
    text-align: center;
    justify-content: center;
    color: #fff;
    padding: 10px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
