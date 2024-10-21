import styled from 'styled-components';
import * as colors from '../../config/colors';

export const FuncionarioContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const FuncionarioCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const InfoContainer = styled.div`
  flex: 1;
  p {
    font-size: 18px;
    font-weight: bold;
    gap: 10px;
    margin: 0;
  }

  span {
    font-weight: normal;
  }

  p + p {
    padding-top: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  height: 100px;
  width: 30%;
  font-size: 22px;

  button {
    display: flex;
    justify-content: flex-start;
    background: none;
    color: ${colors.primaryColor};
    font-size: 22px;
    margin: 10;

    &:hover {
      transition: 0.2s ease;
      opacity: 0.8;
    }
  }
`;

export const CadNovoColab = styled.button`
  width: auto;
  font-size: 14px;
  text-transform: uppercase;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  margin-top: 10px;

  a {
    color: #fff;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 10px 10px;
    font-size: 20px;
  }

  button {
    margin-top: 20px;
    font-size: 20px;
    text-transform: uppercase;
  }
`;
