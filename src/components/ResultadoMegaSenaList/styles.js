import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #FFF;
  margin-bottom: 12px;
  padding: 7px;
  border-radius: 5px;
  z-index: 3;
  box-shadow: 2px 2px rgba(0,0,0, 0.4);
`;

export const StatusText = styled.Text`
  color: ${props => props.status === 'Em andamento' ? '#0000ff' :  (props.status === 'Aberto Para Apostas' ? '#049301' :  '#ef473a' )};
  font-size: 15px;
`;

export const ValorText = styled.Text`
  color: #222;
  font-size: 18px;
  font-weight: bold;
`;

export const ValorExibeOuNaoText = styled.Text`
  color: #222;
  font-size: 18px;
  font-weight: bold;
  display: ${props => props.valor === undefined ? 'none' : 'flex' };
`;