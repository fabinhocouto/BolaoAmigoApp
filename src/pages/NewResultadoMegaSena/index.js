import React, { useState } from 'react';
import firebase from '../../services/firebaseConnection';
import { Keyboard, FlatList, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Background, Input, SubmitButton, SubmitText } from './styles';
import Constants from 'expo-constants';

export default function NewResultadoMegaSena({ navigation }){
  const [dataSorteio, setDataSorteio] = useState('');
  const [numConcurso, setNumConcurso] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: '#fff',
      padding: 10 ,
      marginVertical: 8,
      marginHorizontal: 8,
      borderRadius:100
    },
    title: {
      fontSize: 8,
    },
  });

  const DATA = [
    {id:'01',title: '01',},
    {id:'02',title: '02',},
    {id:'03',title: '03',},
    {id:'04',title: '04',},
    {id:'05',title: '05',},
    {id:'06',title: '06',},
    {id:'07',title: '07',},
    {id:'08',title: '08',},
    {id:'09',title: '09',},
    {id:'10',title: '10',},
    {id:'11',title: '11',},
    {id:'12',title: '12',},
    {id:'13',title: '13',},
    {id:'14',title: '14',},
    {id:'15',title: '15',},
    {id:'16',title: '16',},
    {id:'17',title: '17',},
    {id:'18',title: '18',},
    {id:'19',title: '19',},
    {id:'20',title: '20',},
    {id:'21',title: '21',},
    {id:'22',title: '22',},
    {id:'23',title: '23',},
    {id:'24',title: '24',},
    {id:'25',title: '25',},
    {id:'26',title: '26',},
    {id:'27',title: '27',},
    {id:'28',title: '28',},
    {id:'29',title: '29',},
    {id:'30',title: '30',},
    {id:'31',title: '31',},
    {id:'32',title: '32',},
    {id:'33',title: '33',},
    {id:'34',title: '34',},
    {id:'35',title: '35',},
    {id:'36',title: '36',},
    {id:'37',title: '37',},
    {id:'38',title: '38',},
    {id:'39',title: '39',},
    {id:'40',title: '40',},
    {id:'41',title: '41',},
    {id:'42',title: '42',},
    {id:'43',title: '43',},
    {id:'44',title: '44',},
    {id:'45',title: '45',},
    {id:'46',title: '46',},
    {id:'47',title: '47',},
    {id:'48',title: '48',},
    {id:'49',title: '49',},
    {id:'50',title: '50',},
    {id:'51',title: '51',},
    {id:'52',title: '52',},
    {id:'53',title: '53',},
    {id:'54',title: '54',},
    {id:'55',title: '55',},
    {id:'56',title: '56',},
    {id:'57',title: '57',},
    {id:'58',title: '58',},
    {id:'59',title: '59',},
    {id:'60',title: '60',},

  ];
  
  function handleSubmit(){
    Keyboard.dismiss();
    if(isNaN(parseFloat(numConcurso))){
      alert('O número do cuncurso é obrigatório.');
      return;
    }
    let count = 0;
    selected.forEach(function(value, key) {
      if(value){
        count++;
      }
      }, selected)

    if(count !== 6){
      alert('São necessários seis números para o resultado.');
      return;
    }
    handleAdd();
  }


  async function handleAdd(){
    let key = await firebase.database().ref('resultadoMegaSena').push().key;
    debugger
    let numeros = '';
    selected.forEach(function(value, key) {
      if(value){
        numeros = numeros + key + ';';
      }
      }, selected)

    console.log(numeros);

    await firebase.database().ref('resultadoMegaSena').child(key).set({
      dataSorteio: new Date().toLocaleDateString(),
      numConcurso: parseFloat(numConcurso),
      numerosSorteados: numeros,
    });


    setDataSorteio('');
    setNumConcurso('');
    setSelected(new Map());
    Keyboard.dismiss();
    navigation.navigate('Dashboard');
    alert('Resultado inserido com sucesso.');
  }

  function Item({ id, title, selected, onSelect }) {
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          styles.item,
          { backgroundColor: selected ? '#008000' : '#fff' },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
  
    const [selected, setSelected] = React.useState(new Map());
  
    const onSelect = React.useCallback(
      id => {

        let count = 0;
        selected.forEach(function(value, key) {
          if(value){
            count++;
          }
          }, selected)

        if(count <= 5 || selected.get(id) !== undefined){
          const newSelected = new Map(selected);
          if(!selected.get(id)){
            newSelected.set(id, !selected.get(id));
            setSelected(newSelected);
          }else{
            newSelected.set(id, false);
            setSelected(newSelected);
          }
        }else{
          alert("Escolha no máximo seis números");
        }
        
      },
      [selected],
    );
  

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
      
      <FlatList
        numColumns='6'
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
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
  drawerLabel: 'Resultado Mega',
  drawerIcon: ({ tintColor }) => (
    <Icon name="edit" size={24} color={tintColor} />
  )
};

