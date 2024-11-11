import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  background: #f3f3f3;
  height: 100%;
  width: 100%;

  padding-left: 20px;

  p {
    font-size: 30px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;
