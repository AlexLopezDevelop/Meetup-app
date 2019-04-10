import React from 'react';

import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    ActivityIndicator
} from 'react-native'

import { navigationOptions } from '../config/navOptions'

const {width, height}= Dimensions.get('window');

export default class MeetupList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isLoading: true
        }
    }

static navigationOptions = ({ navigation }) => ({
    title: 'Meetup',
    ... navigationOptions
});

componentWillMount() {
   setTimeout(() => {
    this.setState({
        events: [
            {id: 1, title: 'Evento de Meetup 1', groupImage: 'https://lh3.googleusercontent.com/rgQay7gOgrMSZkwZNgY7QAWriB6u5FwYvD6l_Ha4yiZxN_UzYDU-Evfa0zCWXGaYJFc', groupName: 'React Native Team'},
            {id: 2, title: 'Evento de Meetup 1', groupImage: 'https://lh3.googleusercontent.com/rgQay7gOgrMSZkwZNgY7QAWriB6u5FwYvD6l_Ha4yiZxN_UzYDU-Evfa0zCWXGaYJFc', groupName: 'React Native Team'},
            {id: 3, title: 'Evento de Meetup 1', groupImage: 'https://lh3.googleusercontent.com/rgQay7gOgrMSZkwZNgY7QAWriB6u5FwYvD6l_Ha4yiZxN_UzYDU-Evfa0zCWXGaYJFc', groupName: 'React Native Team'},
            {id: 4, title: 'Evento de Meetup 1', groupImage: 'https://lh3.googleusercontent.com/rgQay7gOgrMSZkwZNgY7QAWriB6u5FwYvD6l_Ha4yiZxN_UzYDU-Evfa0zCWXGaYJFc', groupName: 'React Native Team'}
        ],
        isLoading: false
    })
   }, 2000)
}

    render() {
        const { navigation } = this.props
        return this.state.isLoading
            ? (<ActivityIndicator style={styles.loader} size={1}/>)
            : (
            <ScrollView Style={styles.container}>
                {this.state.events.map((event, i) => (
                
                    <TouchableWithoutFeedback 
                    key={i} 
                    onPress={() => navigation.navigate('Detail', {group: event.groupName, id: event.id})} >
                        <View style={styles.card}>
                            <Image style={styles.image} source={{uri: event.groupImage}}/>
                            <View style={styles.cardContent}>
                                <Text style={styles.title}>{event.title}</Text>
                                <Text>Organizado por {event.groupName}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    loader: {
        marginTop: 100
    },
    container: {
        flex: 1,
        margin: 10,
        height
    },
    card: {
        backgroundColor: 'white',
        borderColor: '#ddd',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80,
        marginVertical: 3
    }, 
    image: {
        width: 80,
        height: 80
    },
    cardContent: {
        flex: 1,
        padding: 10,
        margin: 0
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})
