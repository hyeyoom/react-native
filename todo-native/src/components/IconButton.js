import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';
import {images} from '../images';

const Icon = styled.Image`
<<<<<<< HEAD
  tintColor: ${({theme, completed}) => completed ? theme.done : theme.text};
=======
  tintColor: ${({theme}) => theme.text};
>>>>>>> 026d9d23ac7137c23fb111b0976df41453861e9a
  width: 30px;
  height: 30px;
  margin: 10px;
`

<<<<<<< HEAD
const IconButton = ({type, onPressOut, id}) => {
    const deleteHandler = () => {
        onPressOut(id)
    }

    return (
        <TouchableOpacity onPressOut={deleteHandler}>
=======
const IconButton = ({type, onPressOut}) => {
    return (
        <TouchableOpacity onPressOut={onPressOut}>
>>>>>>> 026d9d23ac7137c23fb111b0976df41453861e9a
            <Icon source={type}/>
        </TouchableOpacity>
    )
}

IconButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
<<<<<<< HEAD
    id: PropTypes.string,
    completed: PropTypes.bool
=======
>>>>>>> 026d9d23ac7137c23fb111b0976df41453861e9a
}

export default IconButton
