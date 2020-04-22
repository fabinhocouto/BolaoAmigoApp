import styled from 'styled-components/native';
import { color } from 'react-native-reanimated';

export const Background = styled.View`
flex:1;
background: #262630;
`;
export const Container = styled.KeyboardAvoidingView`
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

export const SignInButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const SignInText = styled.Text`
  color: #FFF;
  padding-bottom: 13px;
`;

export const SignUpText = styled.Text`
  color: #FFF;
  padding-bottom: 13px;
  font-size: 18px;
  font-weight:bold;
`;


