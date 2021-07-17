import React, {PropsWithChildren, useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import asyncStorageUtil, {StorageKey} from "../utils/StorageUtil";
import {Logger} from "../utils/Logger";
import AuthenticationNavigation from "./auth/AuthenticationNavigation";
import {StyleSheet, Text, View} from "react-native";
import {EventButton} from "../components/Buttons";

const AppNavigator = (props?: PropsWithChildren<any>) => {
    const [isSignedIn, setSignedIn] = useState(false)
    useEffect(() => {
        asyncStorageUtil
            .get(StorageKey.USER_INFO)
            .then(value => {
                Logger.debug(`current user: ${value}`)
                setSignedIn(value != null)
            })
        Logger.debug(`Component has been mounted. Authentication status is ${isSignedIn}`)
    })

    return (
        <NavigationContainer>
            {!isSignedIn && <AuthenticationNavigation/>}
            {isSignedIn && (
                <View style={styles.container}>
                    <Text>로그인 됨</Text>
                    <EventButton onPress={() => {
                        asyncStorageUtil
                            .set(StorageKey.USER_INFO, null)
                            .then(_ => setSignedIn(false))
                    }}/>
                </View>
            )}
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AppNavigator
