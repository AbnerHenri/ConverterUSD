import React from 'react';
import Styles from './Styles/AppStyle';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text } from 'react-native'
import { useEffect, useState } from 'react';

const App = ()  => {

  const Background = '#ccc'
  const API = 'http://economia.awesomeapi.com.br/json/last/USD-BRL'

  const [dataApi, setDataApi] = useState('')

  useEffect(()=>{
    async function GetData(API) {
      const Req = await fetch(API)
      const Data = await Req.json()

      setDataApi(Data.USDBRL.high)
    }

    GetData(API)
  }, [])


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

