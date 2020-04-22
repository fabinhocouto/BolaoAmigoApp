import React, { useState } from 'react';
import firebase from '../../services/firebaseConnection';
import { Keyboard, Button, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Background, Input, SubmitButton, SubmitText } from './styles';

export default function NewResultadoMegaSena({ navigation }){
  const [dataSorteio, setDataSorteio] = useState('');
  const [numConcurso, setNumConcurso] = useState('');
  
  function handleSubmit(){
    Keyboard.dismiss();
    if(isNaN(parseFloat(numConcurso))){
      alert('Preencha todos os campos!');
      return;
    }
    handleAdd();
  }


  async function handleAdd(){
    let key = await firebase.database().ref('resultadoMegaSena').push().key;
    await firebase.database().ref('resultadoMegaSena').child(key).set({
      dataSorteio: new Date().toLocaleDateString(),
      numConcurso: parseFloat(numConcurso),
    });

    setDataSorteio('');
    setNumConcurso('');
    Keyboard.dismiss();
    navigation.navigate('Dashboard');
    alert('Resultado inserido com sucesso.');
  }

   return(
  <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>

    <Background>
     <SafeAreaView style={{alignItems: 'center'}}>

     <Input
        placeholder="Número do Concurso"
        keyboardType="numeric"
        value={numConcurso}
        onChangeText={ (numConcurso)=> setNumConcurso(numConcurso) }
        returnKeyType="next"
        onSubmitEditing={ () => Keyboard.dismiss() }
      />

      <SubmitButton onPress={handleSubmit}>
        <SubmitText>Salvar</SubmitText>
      </SubmitButton>

     </SafeAreaView>
    </Background>
  </TouchableWithoutFeedback>
  )
}

NewResultadoMegaSena.navigationOptions = {
  tabBarLabel: 'Resultado Mega',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit" size={24} color={tintColor} />
  )
};

