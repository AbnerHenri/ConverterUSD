import React from 'react';
import { StyleSheet, SafeAreaView, View, TextInput, Button } from 'react-native'

const App = ()  => {

  const Background = '#ccc'

  return (
    <SafeAreaView style={[Styles.Page, {backgroundColor : Background}]}>
      <View style={Styles.Inputs}>

        {/* <TextInput 
          placeholder='Digite o valor a ser convertido'
          keyboardType='numeric'
        /> */}
        
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
    width : '90%',
    height: '50%',
    transform : [{translateY : -20}],
    borderBottomColor : 'gray',
    borderBottomWidth : 2,
  }

})