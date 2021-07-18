import styled from 'styled-components/native';
import React, {PropsWithChildren} from "react";
import {EventButton} from "../../components/Buttons";
import {Input} from "../../components/Inputs";
import {Text} from "react-native";
import asyncStorageUtil, {StorageKey} from "../../utils/StorageUtil";
import {User} from "../../domain/User";
import {Logger} from "../../utils/Logger";

const AuthenticationContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`

const AuthenticationCode = (props?: PropsWithChildren<any>) => {
    return (
        <AuthenticationContainer>
            <Text>코드를 입력하세요</Text>
            <Input
                placeholder={'test'}
                type={'oneTimeCode'}
            />
            <EventButton
                title={'join'}
                onPress={() => {
                    asyncStorageUtil
                        .set(StorageKey.USER_INFO, new User({
                            name: 'hyeyoom', signature: 'x', token: 'b'
                        }))
                        .then(() => {
                            Logger.debug(`${props.navigation.canGoBack()}`)
                            if (props.navigation.canGoBack()) {
                                props.navigation.navigate('Home')
                            }
                        })
                        .finally(() => {
                            Logger.debug('야발')
                        })
                }}
            />
        </AuthenticationContainer>
    )
}

export default AuthenticationCode
