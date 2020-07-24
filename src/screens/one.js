import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {Input} from "teaset";
import { Feather } from "@expo/vector-icons";


const One = () => {
    return (
        <View >
            <Text  style={{fontSize: 48}}>This is Audio service</Text>
        </View>
    )
};


/*
*    <View style={styles.contentStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <View style={styles.searchBarStyle}>
                <Input/>

            </View>
        </View>
* */
One.navigationOptions =  {
   title: "Home",
   tabBarIcon: <Ionicons name="ios-home" size={24} color="white"/>,
   tabBarOptions: {
       activeTintColor: 'white',
        style: {
            backgroundColor: '#00B2BF',
        },
    },
};


const styles = StyleSheet.create({

    contentStyle: {
        paddingHorizontal: 20,
    },
    searchBarStyle: {
        marginTop: 50,
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'flex-end'
    },
});

export default One;
