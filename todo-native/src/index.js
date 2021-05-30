import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import {Dimensions, StatusBar} from "react-native";
import Input from "./components/input";
import Task from "./components/Task";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({theme}) => theme.main};
  align-self: flex-start;
  margin: 0 20px;
`

const List = styled.ScrollView`
    flex: 1;
  width: ${({width}) => width - 40}px;
`

export default function App() {
    const [newTask, setNewTask] = useState('')
    const addTask = () => {
        alert(`Add: ${newTask}`)
        setNewTask('')
    }

    const handleTextChange = text => {
        setNewTask(text)
    }

    const width = Dimensions.get('window').width

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar
                    barStyle={'light-content'}
                    backgroundColor={theme.background}
                />
                <Title>Todo List</Title>
                <Input
                    placeholder={"+ Add a Task"}
                    value={newTask}
                    onChangeText={handleTextChange}
                    onSubmitEditing={addTask}
                />
                <List width={width}>
                    <Task text={'do nothing'}/>
                </List>
            </Container>
        </ThemeProvider>
    );
}
