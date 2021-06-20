import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';

const StyledTextInput = styled.TextInput.attrs({
    autoCapitalize: 'none',
    autoCorrect: false,
})`
  border: 1px solid #757575;
  padding: 10px;
  margin: 10px 0;
  width: 200px;
  font-size: 20px;
`

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const refName = useRef<HTMLInputElement>(null)
    const refEmail = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log('Form component has been mounted');
        if (refName && refName.current) {
            refName.current.focus()
        }
        return () => console.log('Form component has been unmounted from view.')
    }, [])

    useEffect(() => {
        console.log(`name: ${name}, email ${email}`)
    }, [email])

    return (
        <>
            <StyledText>Name: {name}</StyledText>
            <StyledText>Email: {email}</StyledText>
            <StyledTextInput
                ref={refName}
                value={name}
                onChangeText={text => setName(text)}
                placeholder={"name"}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                    if (refEmail && refEmail.current) {
                        refEmail.current.focus()
                    }
                }}
            />
            <StyledTextInput
                ref={refEmail}
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder={"email"}
                returnKeyType={"done"}
            />
        </>
    )
}

export default Form
