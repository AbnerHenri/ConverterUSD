import React from 'react';
import Styles from './Styles/AppStyle';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native'
import { useEffect, useState } from 'react';

const App = ()  => {

  const Background = '#ccc'
  const API = 'http://economia.awesomeapi.com.br/json/last/USD-BRL'

  const [dataApi, setDataApi] = useState('')
  const [valueResult, setValueResult] = useState(null)
  const [inputResult, setInputResult] = useState(null)

  useEffect(()=>{
    async function GetData(API) {
      const Req = await fetch(API)
      const Data = await Req.json()

      setDataApi(Data.USDBRL.high)
      Keyboard.dismiss()
    }

    GetData(API)
  }, [])

  function Calc(value) {
    const calcResult = value * dataApi
    const fixedResult = calcResult.toFixed(3)

    Keyboard.dismiss()
    setValueResult(fixedResult)
  }

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
          onChangeText={(e)=> setInputResult(e)}
          value={inputResult}
        />

        <TouchableOpacity style={Styles.But} onPress={()=> Calc(inputResult)}>
          <Text style={Styles.TextButton}>Calcular</Text>
        </TouchableOpacity>
        
      </View>

      <View style={[Styles.Result, { display : valueResult != null ? 'flex' : 'none'}]}>
        <Text style={Styles.TextResult}>USD : {valueResult}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

