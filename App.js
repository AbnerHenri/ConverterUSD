import React from 'react';
import { StyleSheet, SafeAreaView, View, TextInput, Button } from 'react-native'

const App = ()  => {

  const Background = '#361ae6'

  return (
    <SafeAreaView style={[Styles.Page, {backgroundColor : Background}]}>
      <View style={Styles.Inputs}>
        <TextInput placeholder='Digite seu E-mail' />
        <TextInput placeholder='Digite sua senha' />
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
    height: '70%',
    borderBottomWidth : '90%',
    borderBottomColor : 'white'
  }

})