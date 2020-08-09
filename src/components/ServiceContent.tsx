import {StyleSheet, Text, View, TouchableOpacity, Button, ImageURISource, ImageRequireSource} from "react-native";
import React from "react";
import { Card  } from 'react-native-elements'
import {NavigationScreenProp } from 'react-navigation';

interface IProps {
    text: string,
    routeName: string,
    navigation: NavigationScreenProp<any,any>,
    imageUrl: ImageURISource | ImageURISource[] | ImageRequireSource
    
}

const ServiceContent: React.FC<IProps> = ({text, routeName, navigation, imageUrl}) => {
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
