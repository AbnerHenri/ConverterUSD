import styled from 'styled-components/native';

const Background = "#6e47e0"

export const Page = styled.SafeAreaView`
  flex : 1;

  background-color: ${Background};
  justify-content: center;
  align-items: center;
`

export const View = styled.View`
  width: 90%;
  height :60%;
`

export const Title = styled.Text`
  font-size: 45px;
  color : white;
  font-weight: 700;
  letter-spacing: 2px;
  transform: translateY(-35px);
`