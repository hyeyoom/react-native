import styled from "styled-components/native";
import React, {PropsWithChildren} from "react";

const Pressable = styled.Pressable`
  background-color: #3182f6;
  border-radius: 4px;
  padding: 15px 40px;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`

const ButtonTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
`

type ButtonProps = {
    title?: string
    onPress?: () => void
    onLongPress?: () => void
}

export const EventButton = (props?: PropsWithChildren<ButtonProps>) => {
    return (
        <Pressable
            onPress={props?.onPress}
            onLongPress={props?.onLongPress}
        >
            <ButtonTitle>{props?.children || props?.title || '버튼'}</ButtonTitle>
        </Pressable>
    )
}
