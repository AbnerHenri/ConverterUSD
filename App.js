import React from 'react';
import Styles from './Styles/AppStyle';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text } from 'react-native'

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

