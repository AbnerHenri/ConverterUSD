import React from 'react';
import { Title, Page, View, Input } from './Styles/AppStyle'

const App = ()  => {


  return (
  <Page>
    <Title>Welcome</Title>

    <View>
      <Input placeholder={'Digite seu login'} />
      <Input placeholder={'Digite sua senha'} />
    </View>
  </Page>
  );
};

export default App;
