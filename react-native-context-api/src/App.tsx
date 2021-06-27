import React, {useState} from 'react'
import styled from 'styled-components/native';
import User from "./components/User";
import UserContext, {UserProvider} from "./contexts/User";
import {Button} from "react-native";
import Input from "./components/Input";

const Container = styled.View`
  flex: 1;  
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`

const App = () => {
    const [name, setName] = useState('React Native')

    return (
        <UserProvider>
            <Container>
                <User/>
                <Input/>
                <Button title={"change name"} onPress={() => {setName('is fun.')}}/>
            </Container>
        </UserProvider>
    )
}

export default App
