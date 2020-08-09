import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const AudioServiceScreen = () => {
    return (
        <View>
            <Text  style={{fontSize: 48}}>This is Audio service</Text>
        </View>
    )
};


AudioServiceScreen.navigationOptions = {
    headerStyle: {
        backgroundColor: '#00B2BF',
    },
    headerTitleStyle: {
        color: 'white',
    }
};


const styles = StyleSheet.create({

});

export default AudioServiceScreen;
