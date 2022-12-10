import React from 'react';
import { StyleSheet, SafeAreaView, View, TextInput, TouchableOpacity, Text } from 'react-native'

const App = ()  => {

  const Background = '#ccc'

  return (
    <SafeAreaView style={[Styles.Page, {backgroundColor : Background}]}>
      <View style={Styles.Inputs}>

        <TextInput 
          placeholder='Digite o valor'
          keyboardType='numeric'
          style={Styles.Input}
        />

        <TouchableOpacity style={Styles.But}>
          <Text style={{color : 'white'}}>Calcular</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default App;

const Styles = StyleSheet.create({

  Page : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },

  Inputs : {
    justifyContent : 'space-evenly',
    alignItems : 'center',

    width : '90%',
    height: '50%',
    transform : [{translateY : -20}],
  },

  Input : {
    width : 220,
    padding : 10,
    fontSize : 20,
    textAlign : 'center',

    borderBottomColor: '#fb1a09',
    borderBottomWidth : 2,
    
  },

  But : {
    width : 220,
    padding : 15,
    backgroundColor: '#fb1a09',
    
    justifyContent : 'center',
    alignItems : 'center',
    
    margin : 25,
    borderRadius : 20,
  }



})