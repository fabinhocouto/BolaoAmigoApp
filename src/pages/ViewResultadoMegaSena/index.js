import {AsyncStorage} from 'react-native'
import React, { useState, useEffect } from 'react';
import firebase from '../../services/firebaseConnection';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ResultadoMegaSenaList from '../../components/ResultadoMegaSenaList';
import {SafeAreaView} from 'react-native';

import { Container, AreaUsuario, UsuarioTitle, Usuario, Registros, Title, IconRight, List } from './styles';

export default function ViewResultadoMegaSena({ navigation }){

  const [resultadoMegaSena, setResultadoMegaSena] = useState([]);
  
  useEffect(()=> {
      
    async function loadingList(){
      
      await firebase.database().ref('resultadoMegaSena').orderByChild('dataSorteio').on('value', (snapshot)=> {
        setResultadoMegaSena([]);
        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            dataSorteio: childItem.val().dataSorteio,
            numConcurso: childItem.val().numConcurso,
            numerosSorteados: childItem.val().numerosSorteados
          };
          setResultadoMegaSena(oldArray => [...oldArray, list]);
        });

      });
    }

    loadingList();

  }, []);

  return(
    <Container>
      <SafeAreaView>
        
        <Registros>
          <Title>Resultados Concursos Mega Sena</Title>
          <IconRight>
            <Icon name="chevron-right" size={30} color="#FFF" />
          </IconRight>
        </Registros>

        <List
          keyExtractor={item => item.key}
          data={resultadoMegaSena}
          renderItem={ ({item}) => ( <ResultadoMegaSenaList data={item} /> ) }
        />
      </SafeAreaView>
    </Container>
  )
}

ViewResultadoMegaSena.navigationOptions = {
  drawerLabel: 'Resultado Mega Sena',
  drawerIcon: ({ tintColor }) => (
    <Icon name="equalizer" size={24} color={tintColor} />
  )
};

