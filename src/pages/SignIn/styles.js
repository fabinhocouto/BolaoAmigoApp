import styled from 'styled-components/native';

export const Background = styled.View`
flex:1;
background: #262630;
align-items: center;
`;

export const Container = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 15px;
  width: 200;
  height: 200px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Input = styled.TextInput`
  background: #FFF;
  color: #222;
  font-size: 17px;
  border-radius: 7px;
  width: 90%;
  margin-bottom: 15px;
  padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #35AAFF;
  height: 45px;
  width: 90%;
  border-radius: 7px;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  color: #FFF;
  font-size: 18px;
`;

export const SignUpLink = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const SignUpText = styled.Text`
  color: #FFF;
  padding-bottom: 13px;
`;


