import React from 'react';
import styled from "styled-components/native";
import Button from './components/Button';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`

const App = () => {
    return (
        <Container>
            <Button title='Hanbit'/>
            <Button title='React Native'/>
        </Container>
    )
}

export default App;