import React from 'react';
import {Button, Text, TextInput, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

type SignInParam = { username: string, password: string }

type AuthenticationHandler = {
    signIn: (data: SignInParam) => {},
    signOut: boolean,
    signUp: boolean
}

const AuthContext = React.createContext({
    signIn: async (data: SignInParam) => {},
    signOut: () => {},
    signUp: async (data: SignInParam) => {}
})

const SplashScreen = () => {
    return (
        <View>
            <Text>Loading...</Text>
        </View>
    )
}

const HomeScreen = () => {
    const {signOut} = React.useContext(AuthContext)
    return (
        <View>
            <Text>Signed In!</Text>
            <Button title={"Sign Out"} onPress={() => signOut()}/>
        </View>
    )
}

const SignInScreen = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const {signIn} = React.useContext(AuthContext)

    return (
        <View>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign in" onPress={() => {
                const param = {username, password}
                console.log(param)
                signIn(param)
            }}/>
        </View>
    )
}

const Stack = createStackNavigator();

type AppAuthStatus = {
    isLoading: boolean,
    isSignOut: boolean,
    userToken: string | null
}

enum AuthActionType {
    RESTORE_TOKEN = 'RESTORE_TOKEN',
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT'
}

type AuthAction = {}

const App = ({navigation}) => {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignOut: false,
                        userToken: action.token
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignOut: true,
                        userToken: null
                    }
            }
        },
        {
            isLoading: true,
            isSignOut: false,
            userToken: null
        }
    );

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            setInterval(() => {
                try {
                    const userToken = 'data-from-secure-storage'
                    dispatch({type: 'RESTORE_TOKEN', token: userToken})
                } catch (e) {

                }
            }, 5000)
        }
        bootstrapAsync()
    }, [])

    const authContext = React.useMemo(() => ({
            signIn: async (data: SignInParam) => {
                dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
            },
            signOut: () => {
                console.log('signed out')
                dispatch({type: 'SIGN_OUT'})
            },
            signUp: async (data: any) => {
                dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
            },
        }),
        []
    )

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator>
                    {state.isLoading ? (
                        <Stack.Screen name="Splash" component={SplashScreen} />
                    ) : state.userToken == null ? (
                        <Stack.Screen
                            name="SignIn"
                            component={SignInScreen}
                            options={{
                                title: 'Sign in',
                                animationTypeForReplace: state.isSignOut ? 'pop' : 'push',
                            }}
                        />
                    ) : (
                        <Stack.Screen name="Home" component={HomeScreen} />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default App;
