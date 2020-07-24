import React, {useState } from 'react'
import {View, StyleSheet, TextInput,Text, ScrollView} from 'react-native'
import {Feather, Ionicons} from "@expo/vector-icons";
import One from "./one";
import SearchForm from  "../components/SearchForm"
import {Input} from "teaset";
import DefinitionContent from "../components/DefinitionContent";

const HomeScreen = () => {
    const [text, setText] = useState('');


    return (
        <View style={styles.container} >
            <View style={styles.containerSearchBar}>
                <SearchForm text={text} setText={setText}  onSearchSubmit={ ()=> console.log(text)}/>
            </View>
            <ScrollView  style={styles.containerScrollView}>
                <DefinitionContent/>
            </ScrollView>
        </View>
    )
};

HomeScreen.navigationOptions =  {
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
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },

    containerScrollView: {
        marginTop: 20,
    }

});

export default HomeScreen;
