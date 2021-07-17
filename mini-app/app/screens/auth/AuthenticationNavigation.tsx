import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import AuthenticationRequest from "./AuthenticationRequest";
import AuthenticationCode from "./AuthenticationCode";

const AuthenticationStack = createStackNavigator()

const AuthenticationNavigation = () => {
    return (
        <AuthenticationStack.Navigator initialRouteName={'인증하기'}>
            <AuthenticationStack.Screen name={'인증하기'} component={AuthenticationRequest}/>
            <AuthenticationStack.Screen name={'코드입력'} component={AuthenticationCode}/>
        </AuthenticationStack.Navigator>
    )
}

export default AuthenticationNavigation
