<<<<<<< HEAD
import React, {useState} from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import {images} from '../images';
import Input from "./input";
=======
import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import { images } from '../images';
>>>>>>> 026d9d23ac7137c23fb111b0976df41453861e9a

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0;
`

const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
<<<<<<< HEAD
  color: ${({theme, completed}) => (completed ? theme.done : theme.text)};
  text-decoration-line: ${({completed}) => completed ? 'line-through' : 'none'};
`

const Task = ({item, deleteTask, toggleTask, updateTask}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(item.text)

    const handleUpdateButtonPress = () => {
        setIsEditing(true)
    }

    const onSubmitEditing = () => {
        if (isEditing) {
            const editedTask = Object.assign({}, item, {text})
            setIsEditing(false)
            updateTask(editedTask)
        }
    }

    const onBlur = () => {
        if (isEditing) {
            setIsEditing(false)
            setText(item.text)
        }
    }

    return isEditing ?
        (
            <Input onChangeText={text => setText(text)} onSubmitEditing={onSubmitEditing} value={text} onBlur={onBlur}/>
        ) :
        (
            <Container>
                <IconButton
                    type={item.completed ? images.completed : images.uncompleted}
                    id={item.id}
                    onPressOut={toggleTask}
                    completed={item.completed}
                />
                <Contents completed={item.completed}>{item.text}</Contents>
                {item.completed || <IconButton type={images.update} onPressOut={handleUpdateButtonPress}/>}
                <IconButton type={images.delete} id={item.id} onPressOut={deleteTask} completed={item.completed}/>
            </Container>
        )
}

Task.propTypes = {
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired
=======
  color: ${({theme}) => theme.text};
`

const Task = ({text}) => {
    return (
        <Container>
            <IconButton type={images.uncompleted}/>
            <Contents>{text}</Contents>
            <IconButton type={images.update}/>
            <IconButton type={images.delete}/>
        </Container>
    )
}

Task.propTypes = {
    text: PropTypes.string.isRequired,
>>>>>>> 026d9d23ac7137c23fb111b0976df41453861e9a
}

export default Task
