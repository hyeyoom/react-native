import styled from 'styled-components/native';
import React, {PropsWithChildren} from "react";
import {EventButton} from "../../components/Buttons";
import {Logger} from "../../utils/Logger";
import {Input} from "../../components/Inputs";

const AuthenticationContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`

const AuthenticationRequest = (props?: PropsWithChildren<any>) => {
    return (
        <AuthenticationContainer>
            <Input
                placeholder={'test'}
                type={'emailAddress'}
            />
            <EventButton
                title={'easy-join'}
                onPress={() => props?.navigation.navigate('코드입력')}
                onLongPress={() => Logger.debug('길게 누름')}
            />
        </AuthenticationContainer>
    )
}

export default AuthenticationRequest
