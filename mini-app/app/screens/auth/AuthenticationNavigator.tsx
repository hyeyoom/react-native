import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import AuthenticationRequest from "./AuthenticationRequest";
import AuthenticationCode from "./AuthenticationCode";

const AuthenticationRouter = createStackNavigator()

const AuthenticationNavigator = () => {
    return (
        <AuthenticationRouter.Navigator initialRouteName={'auth'}>
            <AuthenticationRouter.Screen name={'auth'} component={AuthenticationRequest}/>
            <AuthenticationRouter.Screen name={'authcode'} component={AuthenticationCode}/>
        </AuthenticationRouter.Navigator>
    )
}

export default AuthenticationNavigator
