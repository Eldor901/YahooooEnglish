import {StyleSheet, Text, View} from "react-native";
import React from "react";

interface IProp {
    definition?: string
}

const DefinitionContent: React.FC<IProp> = () => {

    return (
        <>
            <View style={styles.containerWord}>
                <View style={styles.containerDefinition}>
                    <Text>
                        <Text style={{color: 'red' , fontSize: 30}}>Word: </Text>
                        <Text style={{color: "green"}}>GROUP OF LETTERS </Text>
                        <Text style={{color: "blue"}}>countable</Text>
                    </Text>
                    <Text style={{color: "grey", fontSize: 15}}>
                        definition: a single group of letters that are used together with a particular meaning
                    </Text>
                </View>
            </View>
        </>
    )
};




const styles = StyleSheet.create({
    containerWord: {
        flex: 1
    },

    containerDefinition: {
        marginTop: 10,

    }

});


export default DefinitionContent;
