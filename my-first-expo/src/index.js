import React, {useState} from 'react';
import styled, {ThemeProvider} from "styled-components/native";
import Button from './components/Button';
import {Switch, Text} from "react-native";
import {darkTheme, lightTheme} from "./theme";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  align-items: center;
  justify-content: center;
  text-align: center;
`

const App = () => {
    const [isDark, setIsDark] = useState(false)
    const toggleSwitch = () => setIsDark(!isDark)

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Text title={'switch theme'}>switch theme</Text>
                <Switch value={isDark} onValueChange={toggleSwitch}/>
                <Button title='카카오'/>
                <Button title='네이버'/>
            </Container>
        </ThemeProvider>
    )
}

export default App;
