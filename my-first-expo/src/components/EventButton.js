import React from "react";
import {Text, TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';

const EventButton = () => {
    const onPressIn = () => console.log('Press In')
    const onPressOut = () => console.log('Press Out')
    const onPress = () => console.log('Press')
    const onLongPress = () => console.log('Long Press')

    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress={onPress}
            onLongPress={onLongPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            delayLongPress={3000}
        >
            <Text style={{color: 'white', fontSize: 24}}>Press</Text>
        </TouchableOpacity>
    )
}

EventButton.defaultProps = {
    title: '버튼',
    onPress: () => alert('not implemented yet'),
}

EventButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}

export default EventButton;