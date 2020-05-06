import React, { useState } from 'react';
import firebase from '../../services/firebaseConnection';
import { Keyboard, Button, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInputMask } from 'react-native-masked-text';
import { Background, Input, SubmitButton, SubmitText } from './styles';

export default function NewRodada({ navigation }){
  const [maxParticipante, setMaxParticipante] = useState('');
  const [valorAposta, setValorAposta] = useState('');
  
  function handleSubmit(){
    Keyboard.dismiss();
    var valorCifrao = valorAposta.replace('R$','');
    var valor = valorCifrao.replace(',','.');
    setValorAposta(valor);
    if(isNaN(parseFloat(valor)) || isNaN(parseFloat(maxParticipante))){
      alert('Preencha todos os campos!');
      return;
    }
    handleAdd();
    
  }


  async function handleAdd(){
    alert('entrou ')
    let uid = await firebase.auth().currentUser.uid;
    alert('uid: '+uid);
    let key = await firebase.database().ref('rodada').push().key;
    await firebase.database().ref('rodada').child(key).set({
      dataInicio: new Date().toLocaleDateString(),
      valorAposta: parseFloat(valorAposta),
      maxParticipante: parseFloat(maxParticipante),
      status: 'Aberto Para Apostas',
    });

    alert('passou.');
    setValorAposta('');
    setMaxParticipante('');
    Keyboard.dismiss();
    navigation.navigate('Dashboard');
    alert('Rodada inserida com sucesso.');
  }

   return(
  <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>

    <Background>
     <SafeAreaView style={{alignItems: 'center'}}>

     <TextInputMask
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$',
          suffixUnit: ''
        }}
        style={{height: '10%',width:'90%', marginTop:'30%', fontSize:'16%',backgroundColor:'#FFF'}}
        placeholder={'Valor Aposta'}
        value={valorAposta}
        onChangeText={text => {
          setValorAposta(text);
        }}
      />

     <Input
        placeholder="Máx. Participantes"
        keyboardType="numeric"
        value={maxParticipante}
        onChangeText={ (maxParticipante)=> setMaxParticipante(maxParticipante) }
        returnKeyType="next"
        onSubmitEditing={ () => Keyboard.dismiss() }
      />

      <SubmitButton onPress={handleSubmit}>
        <SubmitText>Registrar</SubmitText>
      </SubmitButton>

     </SafeAreaView>
    </Background>
  </TouchableWithoutFeedback>
  )
}

NewRodada.navigationOptions = {
  drawerLabel: 'Registrar',
  drawerIcon: ({ tintColor }) => (
    <Icon name="edit" size={24} color={tintColor} />
  )
};

