import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/Home";
import List from "../screens/List";
import Item from "../screens/Item";
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                cardStyle: {backgroundColor: '#ffffff'},
                headerStyle: {
                    height: 110,
                    backgroundColor: '#95a5a6',
                    borderBottomWidth: 5,
                    borderBottomColor: '#34495e'
                },
                headerTitleStyle: {color: '#ffffff', fontSize: 24},
                headerTitleAlign: 'center',
                headerTitle: ({style}) => (
                    <MaterialCommunityIcons name={"react"} style={style} />
                )
            }}>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen
                name={"List"}
                component={List}
                options={{
                    headerTitle: 'List Screen',
                    headerBackTitleVisible: false
                }}
            />
            <Stack.Screen name={"Item"} component={Item}/>
        </Stack.Navigator>
    )
};

export default StackNavigation;
