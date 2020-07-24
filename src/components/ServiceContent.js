import {StyleSheet, Text, View, TouchableOpacity, Button} from "react-native";
import React from "react";
import { Card  } from 'react-native-elements'


const ServiceContent = ({text, routeName, navigation, imageUrl}) => {
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate(routeName)}}>
                <Card title={text}
                      image={imageUrl}
                >
                <Button title={"go to service " + text}
                             onPress={()=>{navigation.navigate(routeName)}}  color="#00B2BF" />

                </Card>
        </TouchableOpacity>

    )
};




const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor:'#ff5c5c',
        width: 2000,
        height: 20,
    }
});


export default ServiceContent;
