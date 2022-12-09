import React from 'react';
import { StyleSheet, SafeAreaView, View, TextInput, Button } from 'react-native'

const App = ()  => {

  const Background = '#361ae6'

  return (
    <SafeAreaView style={[Styles.Page, { backgroundColor : Background}]}>

    </SafeAreaView>
  );
};

export default App;

const Styles = StyleSheet.create({

  Page : {
    flex : 1,
  }



})