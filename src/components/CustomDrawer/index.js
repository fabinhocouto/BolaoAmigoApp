import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

class CustomDrawer extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{width:'100%', height:77}}>
                    <Image source={required('../../img/perfil.png')} style={{width:65, height: 65}}/>
                    <Text style={{color:'#FFF',fontSize:17}}>Bem vindo!</Text>
                </View>
                <ScrollView>
                    <DrawerNavigatorItems {...this.props}/>
                </ScrollView>
            </View>
        )
    }
}

export default CustomDrawer;