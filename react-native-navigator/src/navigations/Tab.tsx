import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Mail, Meet, Settings} from "../screens/TabScreens";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name={"달력"} component={Mail}/>
            <Tab.Screen name={"등록"} component={Meet}/>
            <Tab.Screen name={"지도"} component={Settings}/>
        </Tab.Navigator>
    )
}

export default TabNavigation;
