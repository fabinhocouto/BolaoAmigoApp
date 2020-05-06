import {AsyncStorage} from 'react-native'
import React, { useState, useEffect } from 'react';
import firebase from '../../services/firebaseConnection';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RodadaList from '../../components/RodadaList';
import {SafeAreaView} from 'react-native';

import { Container, AreaUsuario, UsuarioTitle, Usuario, Registros, Title, IconRight, List } from './styles';

export default function Dashboard({ navigation }){

  const [nome, setNome] = useState('');
  const [rodada, setRodada] = useState([]);
  const uid = navigation.state.params.uid;

  useEffect(()=> {

    async function loadName(){
      const nomeStorage = await AsyncStorage.getItem('@nome');
      
      if(nomeStorage){
        setNome(nomeStorage);
      }else{

        let uid = firebase.auth().currentUser.uid;
        await firebase.database().ref('users').child(uid)
        .once('value').then((snapshot)=> {
          setNome(snapshot.val().nome);
        });
        await AsyncStorage.setItem('@nome', nome);

      }

    }

    loadName();
    
    async function loadingList(){
      
      await firebase.database().ref('rodada').orderByChild('status').on('value', (snapshot)=> {
        setRodada([]);
        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            dataInicio: childItem.val().dataInicio,
            dataFim: childItem.val().dataFim,
            numParticipante: childItem.val().numParticipante,
            maxParticipante: childItem.val().maxParticipante,
            valorAposta: childItem.val().valorAposta,
            status: childItem.val().status
          };
          setRodada(oldArray => [...oldArray, list]);
        });

      });
    }

    loadingList();

  }, []);

  return(
    <Container>
      <SafeAreaView>
        <AreaUsuario>
          <UsuarioTitle>Seja bem vindo</UsuarioTitle>
          <Usuario>{nome}</Usuario>
        </AreaUsuario>

        <Registros>
          <Title>Rodadas</Title>
          <IconRight>
            <Icon name="chevron-right" size={30} color="#FFF" />
          </IconRight>
        </Registros>

        <List
          keyExtractor={item => item.key}
          data={rodada}
          renderItem={ ({item}) => ( <RodadaList data={item} /> ) }
        />
      </SafeAreaView>
    </Container>
  )
}

Dashboard.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon name="equalizer" size={24} color={tintColor} />
  )
};

