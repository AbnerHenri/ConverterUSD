import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex : 1;

  justify-content: center;
  align-items: center;
`

const View = styled.View`
  width: 90%;
  height :60%;
  background-color: blue;
`

const Text = styled.Text`
  font-size: 25px;
  color : gray;
`

const App = ()  => {
  return (
  <Page>
    <View>

    </View>
  </Page>
  );
};

export default App;
