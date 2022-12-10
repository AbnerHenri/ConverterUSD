import React from 'react';
import { StyleSheet, SafeAreaView, View, TextInput, Button } from 'react-native'

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
    justifyContent : 'center',
    alignItems : 'center',

    width : '90%',
    height: '50%',
    transform : [{translateY : -20}],
    borderBottomColor : 'gray',
    borderBottomWidth : 2,
  },

  Input : {
    width : 220,
    padding : 15,
    fontSize : 20,
    textAlign : 'center',


    borderBottomColor : 'red',
    borderBottomWidth : 2,
  }

})