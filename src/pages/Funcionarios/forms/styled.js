import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  label {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    flex: 1 1 350px;
  }

  input {
    height: 35px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 10px 10px;
    font-size: 20px;
    margin-top: 5px;
    width: 400px;
  }

  button {
    text-align: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    font-size: 20px;
    text-transform: uppercase;
  }
  select {
    margin-top: 5px;
    height: 35px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 5px;
    font-size: 20px;
    background-color: #f9f9f9;
    color: #807d7d;
  }

  option {
    font-size: 20px;
    padding: 5px;
    background-color: #f9f9f9;
    color: #807d7d;
  }
`;
