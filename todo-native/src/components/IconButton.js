import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';
import {images} from '../images';

const Icon = styled.Image`
  tintColor: ${({theme}) => theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`

const IconButton = ({type, onPressOut}) => {
    return (
        <TouchableOpacity onPressOut={onPressOut}>
            <Icon source={type}/>
        </TouchableOpacity>
    )
}

IconButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
}

export default IconButton
