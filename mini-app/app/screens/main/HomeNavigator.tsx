import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import styled from "styled-components/native";
import {Text} from "react-native";

const HomeRouter = createMaterialBottomTabNavigator()

const HomeNavigator = () => {
    return (
        <HomeRouter.Navigator>
            <HomeRouter.Screen name={'Home'} component={Home}/>
            <HomeRouter.Screen name={'Timeline'} component={Timeline}/>
            <HomeRouter.Screen name={'Map'} component={Map}/>
        </HomeRouter.Navigator>
    )
}

// temp
const DefaultView = styled.View`
  flex: 1;
  background-color: black;
  color: white;
  font-size: 20px;
`
const Home = () => {
    return (<DefaultView><Text>main</Text></DefaultView>)
}

const Timeline = () => {
    return (<DefaultView><Text>timeline</Text></DefaultView>)
}

const Map = () => {
    return (<DefaultView><Text>map</Text></DefaultView>)
}
// temp

export default HomeNavigator
