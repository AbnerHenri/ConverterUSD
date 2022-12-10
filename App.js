import React from 'react';
import { StyleSheet, SafeAreaView, View, TextInput, TouchableOpacity, Text } from 'react-native'

const App = ()  => {

  const Background = '#ccc'

  return (
    <SafeAreaView style={[Styles.Page, {backgroundColor : Background}]}>

    <View style={Styles.Titles}>
      <Text style={Styles.TitleOne}>Conversor de Moedas</Text>
      <Text style={Styles.TitleTwo}>De BRL para USD</Text>
    </View>
      

      <View style={Styles.CalculatorArea}>

        <TextInput 
          placeholder='Digite o valor'
          keyboardType='numeric'
          style={Styles.Input}
        />

        <TouchableOpacity style={Styles.But}>
          <Text style={Styles.TextButton}>Calcular</Text>
        </TouchableOpacity>
        
      </View>

      <View style={Styles.Result}>

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

  CalculatorArea : {
    justifyContent : 'space-between',
    alignItems : 'center',
    marginTop : 50,

    width : '90%',
    height: '30%',
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
    
    margin : 15,
    borderRadius : 20,
  },

  TextButton : {
    color : 'white',
  },

  TitleOne : {
    fontSize : 26,
    fontWeight : 'bold',
    padding : 15
  },

  TitleTwo : {
    fontSize : 18,
    color: '#fe6d4c',
    marginBottom : 25,
  },

  Titles : {
    transform: [{ translateY: -35 }],
    justifyContent : 'center',
    alignItems : 'center'
  },

  Result : {
    width : '90%',
    height : 150,
    backgroundColor : 'gray'
  }

})