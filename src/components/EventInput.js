import React, {useState} from 'react';
import {Text, TextInput, View} from "react-native";

const EventInput = () => {
    const [text, setText] = useState('')
    const onChange = event => setText(event.nativeEvent.text)
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{margin: 10, fontSize: 30}}>text: {text}</Text>
            <TextInput
                style={{borderWidth: 1, padding: 10, fontSize: 20}}
                placeholder={"Enter a text here."}
                onChange={onChange}
            />
        </View>
    )
}

export default EventInput;