import styled from "styled-components/native";
import React, {PropsWithChildren} from "react";

const TextInput = styled.TextInput`
  font-size: 20px;
  border-width: 1px;
  margin: 10px 0;
  height: 50px;
  width: 150px;
  padding: 0 20px;
`

type InputProps = {
    type?: 'emailAddress' | 'username' | 'password' | 'none' | 'oneTimeCode'
    placeholder?: string
}

export const Input = (props?: PropsWithChildren<InputProps>) => {
    return (
        <TextInput
            placeholder={props?.placeholder || ''}
            textContentType={props?.type || 'none'}
        />
    )
}
