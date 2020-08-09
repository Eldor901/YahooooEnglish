import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import ServicesScreen from "./ServicesScreen";


const StoriesServiceScreen: React.FC = () => {
    return (
        <View>
            <Text  style={{fontSize: 48}}>This is stories service</Text>
        </View>
    )
};


// @ts-ignore
StoriesServiceScreen.navigationOptions = {
    headerStyle: {
        backgroundColor: '#00B2BF',
    },
    headerTitleStyle: {
        color: 'white',
    }
};


const styles = StyleSheet.create({

});

export default StoriesServiceScreen;
