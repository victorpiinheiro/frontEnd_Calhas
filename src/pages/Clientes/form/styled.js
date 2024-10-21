import styled from 'styled-components';

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
