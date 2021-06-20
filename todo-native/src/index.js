import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import {Dimensions, StatusBar} from "react-native";
import Input from "./components/input";
import Task from "./components/Task";
<<<<<<< HEAD
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
=======
>>>>>>> 026d9d23ac7137c23fb111b0976df41453861e9a

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
<<<<<<< HEAD
  flex: 1;
=======
    flex: 1;
>>>>>>> 026d9d23ac7137c23fb111b0976df41453861e9a
  width: ${({width}) => width - 40}px;
`

export default function App() {
<<<<<<< HEAD
    const [isReady, setIsReady] = useState(false)
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState({})

    const saveTasks = async tasks => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks))
            setTasks(tasks)
        } catch (e) {
            console.error(e)
        }
    }

    const loadTasks = async () => {
        const loadedTasks = await AsyncStorage.getItem('tasks')
        setTasks(JSON.parse(loadedTasks || '{}'))
    }

    const addTask = () => {
        const ID = Date.now().toString()
        const newTaskObject = {
            [ID]: {id: ID, text: newTask, completed: false},
        }
        setNewTask('')
        saveTasks({...tasks, ...newTaskObject})
    }

    const deleteTask = id => {
        const currentTasks = Object.assign({}, tasks)
        delete currentTasks[id];
        saveTasks(currentTasks)
    }

    const toggleTask = id => {
        const currentTasks = Object.assign({}, tasks)
        currentTasks[id]['completed'] = !currentTasks[id]['completed']
        saveTasks(currentTasks)
    }

    const updateTask = item => {
        const currentTasks = Object.assign({}, tasks)
        currentTasks[item.id] = item
        saveTasks(currentTasks)
=======
    const [newTask, setNewTask] = useState('')
    const addTask = () => {
        alert(`Add: ${newTask}`)
        setNewTask('')
>>>>>>> 026d9d23ac7137c23fb111b0976df41453861e9a
    }

    const handleTextChange = text => {
        setNewTask(text)
    }

<<<<<<< HEAD
    const onBlur = () => setNewTask('')

    const width = Dimensions.get('window').width

    return isReady ? (
=======
    const width = Dimensions.get('window').width

    return (
>>>>>>> 026d9d23ac7137c23fb111b0976df41453861e9a
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
<<<<<<< HEAD
                    onBlur={onBlur}
                />
                <List width={width}>
                    {Object.values(tasks)
                        .reverse()
                        .map(item => (
                                <Task
                                    key={item.id}
                                    item={item}
                                    deleteTask={deleteTask}
                                    toggleTask={toggleTask}
                                    updateTask={updateTask}
                                />
                            )
                        )
                    }
                </List>
            </Container>
        </ThemeProvider>
    ) : (
        <AppLoading
            startAsync={loadTasks}
            onFinish={() => setIsReady(true)}
            onError={console.error}
        />
=======
                />
                <List width={width}>
                    <Task text={'do nothing'}/>
                </List>
            </Container>
        </ThemeProvider>
>>>>>>> 026d9d23ac7137c23fb111b0976df41453861e9a
    );
}
