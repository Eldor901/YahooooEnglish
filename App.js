import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import One from "./src/screens/one";
import ServicesScreen from "./src/screens/ServicesScreen";
import AudioServiceScreen from "./src/screens/AudioServiceScreen";
import { setNavigator } from "./src/navigation/navigationRef";
import {AntDesign} from "@expo/vector-icons";
import StoriesServiceScreen from "./src/screens/StoriesServiceScreen"
import SynonymsServiceScreen from "./src/screens/SynonymsServiceScreen"
import HomeScreen from "./src/screens/HomeScreen";

const Services = createStackNavigator({
    ServicesScreen: ServicesScreen,
    AudioServiceScreen: AudioServiceScreen,
    StoriesServiceScreen: StoriesServiceScreen,
    SynonymsServiceScreen: SynonymsServiceScreen,
});

Services.navigationOptions = {
    title: "Services",
    tabBarIcon: <AntDesign name="appstore1" size={24}  color="white"  />,
    tabBarOptions: {
        activeTintColor: 'white',
        style: {
            backgroundColor: '#00B2BF',
        },
    },
};

const  MainFlow = createBottomTabNavigator({
    Home: HomeScreen,
    Services: Services,
});



const switchNavigator = createSwitchNavigator({
    menuFlow: MainFlow
});

const App = createAppContainer(switchNavigator);

export default () => {
    return <App ref={(navigator) => {
        setNavigator(navigator);
    }}/>
}
