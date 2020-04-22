import styled from 'styled-components/native';

export const Background = styled.View`
flex:1;
background: #262630;
`;

export const Input = styled.TextInput.attrs({
  placehodlertextcolor: '#222'
})`
  height: 50px;
  width: 90%;
  background-color:#FFF;
  margin-top: 30px;
  font-size: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #222;
`;