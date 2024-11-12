import styled from 'styled-components';

export const Container = styled.section`
  max-width: 550px;
  min-height: 500px;
  background: #e0e0de;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #bababa;

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;

    width: 90%;
    margin: 5px auto;
  }

  input {
    height: 35px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 10px 10px;
    font-size: 20px;
    margin-top: 5px;
    color: #919191;

    &:focus {
      border: 1px solid #ccc;
    }
  }

  button {
    width: 90%;
    margin-top: 40px;
    justify-content: center;
    margin: 30px auto;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 3px;
  }
`;
