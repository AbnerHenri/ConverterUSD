import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex : 1;
`

const Text = styled.Text`
  font-size: 25px;
  color : gray;
`

const App = ()  => {
  return (
  <Page>
    <Text>Hello World!</Text>
  </Page>
  );
};

export default App;
