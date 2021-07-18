import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import TopLevelNavigator from "./screens/TopLevelNavigator";
import {NavigationContainer} from "@react-navigation/native";
import asyncStorageUtil, {StorageKey} from "./utils/StorageUtil";

/**
 * Switch navigator 역할을 수행함
 */
const App = () => {
    /*const [isSignedIn, setSignedIn] = useState(false)

    useEffect(() => {
        asyncStorageUtil
            .get(StorageKey.USER_INFO)
            .then(value => {
                Logger.debug(`current user: ${value}`)
                setSignedIn(value != null)
            })
        Logger.debug(`Component has been mounted. Authentication status is ${isSignedIn}`)
    })*/
    useEffect(() => {
        asyncStorageUtil.set(StorageKey.USER_INFO, null)
    })

    return (
        <NavigationContainer>
            <TopLevelNavigator/>
        </NavigationContainer>
    )

    /*return isSignedIn ?
        (
            <View style={styles.container}>
                <Text>로그인 되어 있음</Text>
                <EventButton
                    title={'logout'}
                    onPress={() => {
                        asyncStorageUtil
                            .set(StorageKey.USER_INFO, null)
                            .then(_ => setSignedIn(false))
                    }}
                />
            </View>
        ) :
        (
            <NavigationContainer>
                <AuthenticationNavigation/>
            </NavigationContainer>
        )*/
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App
