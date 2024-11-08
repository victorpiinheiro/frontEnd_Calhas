import styled from 'styled-components';

import * as colors from '../../../config/colors';

export const ContainerCard = styled.section`
  display: flex;
`;

export const Card = styled.div`
  color: #333333;
  border-radius: 5px;
  border: 1px solid #828282;
  height: 300px;
  width: 600px;
  background: #c3c3c3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  margin-top: 20px;

  h1 {
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  h3 {
    padding: 5px;
    font-size: 25px;
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
  }
`;
