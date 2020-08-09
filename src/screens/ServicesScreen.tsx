import React from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import ServiceContent from '../components/ServiceContent'
import {NavigationScreenProp} from "react-navigation";

interface IProps {
    navigation: NavigationScreenProp<any,any>
}

const ServicesScreen: React.FC<IProps> = ({navigation}) => {
    return (
        <ScrollView>
            <ServiceContent text="Audio"
                            routeName="AudioServiceScreen"
                            navigation={navigation}
                            imageUrl={require('../images/audio.jpg')}/>
            <ServiceContent text="Short Stories"
                            routeName="StoriesServiceScreen"
                            navigation={navigation}
                            imageUrl={require('../images/stories.png')}
            />
            <ServiceContent text="Synonyms"
                            routeName="SynonymsServiceScreen"
                            navigation={navigation}
                            imageUrl={require('../images/synonyms.jpg')}/>
        </ScrollView>
    )
};


// @ts-ignore
ServicesScreen.navigationOptions = {
    headerStyle: {
        backgroundColor: '#00B2BF',
    },
    headerTitleStyle: {
        color: 'white',
    }
};


const styles = StyleSheet.create({

});

export default ServicesScreen;
