import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from "react-native";
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.main,
}))`
  width: ${({width}) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.itemBackground};
  font-size: 25px;
  color: ${({theme}) => theme.text};
`

<<<<<<< HEAD
const Input = ({placeholder, value, onChangeText, onSubmitEditing, onBlur}) => {
=======
const Input = ({placeholder, value, onChangeText, onSubmitEditing}) => {
>>>>>>> 026d9d23ac7137c23fb111b0976df41453861e9a
    const width = Dimensions.get('window').width
    return (
        <StyledInput
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
<<<<<<< HEAD
            onBlur={onBlur}
=======
>>>>>>> 026d9d23ac7137c23fb111b0976df41453861e9a
            width={width}
            placeholder={placeholder}
            maxLength={50}
            autoCapitalize={"none"}
            autoCorrect={false}
            returnKeyType={"done"}
            keyboardAppearance={"dark"}
        />
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
<<<<<<< HEAD
    onSubmitEditing: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
=======
    onSubmitEditing: PropTypes.func.isRequired
>>>>>>> 026d9d23ac7137c23fb111b0976df41453861e9a
}

export default Input
