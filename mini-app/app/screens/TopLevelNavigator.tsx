import React, {useEffect, useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeNavigator from "./main/HomeNavigator";
import AuthenticationNavigator from "./auth/AuthenticationNavigator";
import asyncStorageUtil, {StorageKey} from "../utils/StorageUtil";
import {Logger} from "../utils/Logger";

const TopLevelRouter = createStackNavigator()

const TopLevelNavigator = () => {
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
        <TopLevelRouter.Navigator initialRouteName={'Authentication'}>
            {!isSignedIn && <TopLevelRouter.Screen name={'Authentication'} component={AuthenticationNavigator}/>}
            {isSignedIn && <TopLevelRouter.Screen name={'Home'} component={HomeNavigator}/>}
        </TopLevelRouter.Navigator>
    )
}

export default TopLevelNavigator
