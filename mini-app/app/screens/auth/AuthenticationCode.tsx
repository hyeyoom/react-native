import styled from 'styled-components/native';
import React, {PropsWithChildren} from "react";
import {EventButton} from "../../components/Buttons";
import {Logger} from "../../utils/Logger";
import {Input} from "../../components/Inputs";
import {Text} from "react-native";
import StorageUtil, {StorageKey} from "../../utils/StorageUtil";
import {User} from "../../domain/User";

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
                    const user = new User({name: 'hyeyoom', signature: 'x', token: 'b'})
                    Logger.debug(`AuthenticationCode#${user}`)
                    StorageUtil
                        .set(StorageKey.USER_INFO, user)
                        .then(_ => {
                            StorageUtil
                                .get(StorageKey.USER_INFO)
                                .then(async user => {
                                    Logger.debug(`value: ${new User(user)}`)
                                    props.navigation.popToTop()
                                })
                        })
                }}
                onLongPress={() => Logger.debug('길게 누름')}
            />
        </AuthenticationContainer>
    )
}

export default AuthenticationCode
