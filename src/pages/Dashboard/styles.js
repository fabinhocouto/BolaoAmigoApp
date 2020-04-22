import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background: #262630;
`;

export const AreaUsuario = styled.View`
  align-items: center;
  margin: 30px 0 30px 0;  
`;

export const UsuarioTitle = styled.Text`
  color: #DDD;
  font-size: 18px;
  font-style: italic;
`;

export const Usuario = styled.Text`
  color: #FFF;
  font-size: 28px;
  font-weight: bold;
`;

export const Registros = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 15px; 
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
`;

export const IconRight = styled.TouchableOpacity``;

export const List = styled.FlatList.attrs({
  paddingHorizontal: 15,
  paddingVertical: 15,
})`
  margin-top: 12px;
`;


