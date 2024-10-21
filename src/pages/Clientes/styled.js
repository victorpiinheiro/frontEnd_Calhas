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
  tr {
  }

  th {
    padding: 10px 20px;
    text-align: left;

    border-bottom: 1px solid #ddd;
    background-color: #f4f4f4;
  }

  td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  button {
    background: transparent;
    align-items: center;
    justify-content: center;
    color: ${colors.primaryColor};
    font-size: 20px;

    &:hover {
      opacity: 0.8;
      transition: 1s ease;
    }
  }
`;
