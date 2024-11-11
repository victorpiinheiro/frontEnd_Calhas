import styled from 'styled-components';

import * as colors from '../../../config/colors';

export const ContainerCard = styled.section`
  display: flex;

  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
`;

export const Card = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #555555;
  border-radius: 5px;
  border: 1px solid #bababa;
  min-height: 300px;
  max-height: 500px;
  width: 500px;
  background: #e8e7e6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
  margin-top: 40px;
  box-sizing: border-box;
  opacity: 0.8;

  h1 {
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  span {
    font-size: 30px;
  }

  h3 {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 5px;
    font-size: 23px;
    border-bottom: 1px solid #bababa;
  }

  a {
    border-radius: 4px;
    display: flex;
    color: #fff;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 40px;
    font-size: 18px;
    text-transform: uppercase;
    background: ${colors.primaryColor};
    font-weight: bold;
  }
`;
