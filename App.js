import React from 'react';
import { Title, Page, View, Input, Line, Button } from './Styles/AppStyle'

const App = ()  => {


  return (
  <Page>
    <Title>Welcome</Title>

    <View>
      <Input placeholder={'Digite seu login'} />
      <Input placeholder={'Digite sua senha'} />
      <Button title={'Enviar'} />
      <Line />
    </View>

  </Page>
  );
};

export default App;
