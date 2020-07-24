import {Button, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {Feather} from "@expo/vector-icons";

const SearchForm = ({text, setText, onSearchSubmit}) => {
    return (
        <View style={styles.containerSearchBar}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={text}
                onChangeText={(text)=>setText(text)}
                style={styles.inputStyle}
                placeholder="Search"
                onEndEditing={onSearchSubmit}
            />
            <Feather name="search" style={styles.searchIcon}/>
        </View>

    )
};

const styles = StyleSheet.create({

    containerSearchBar: {
        marginTop: 30,
    },

    searchIcon: {
        fontSize: 24,
        marginTop: -30,
        marginRight: 10,
        alignSelf: 'flex-end'
    },

    inputStyle: {
        borderColor: "#00B2BF",
        borderRadius: 1,
        borderWidth: 2,
        fontSize: 18,
        paddingVertical: 5,
        paddingLeft: 10,
    },
});


export default SearchForm
