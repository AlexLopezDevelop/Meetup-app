import React from 'react'
import { View, Text, ScrollView, Image, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { navigationOptions } from '../config/navOptions'

export default class MeetupDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {id: 1, title: 'Evento de Meetup 1', groupImage: 'https://lh3.googleusercontent.com/rgQay7gOgrMSZkwZNgY7QAWriB6u5FwYvD6l_Ha4yiZxN_UzYDU-Evfa0zCWXGaYJFc', groupName: 'React Native Team', date: '16-04-2019', location: 'Barcelona', locationAddress: 'Calle Pelayo 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit non risus eu dapibus. Etiam eget placerat diam. Suspendisse mollis ante urna, vitae pulvinar turpis semper elementum. Fusce quis mollis quam. Suspendisse ut ligula at risus fringilla tempus. Nullam ut diam magna. Suspendisse est enim, lacinia a auctor ullamcorper, pellentesque quis lorem. Nunc ut lacus pellentesque, egestas dui non, pulvinar tortor. Maecenas dignissim id tortor at auctor.'},
            assistants: []
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Evento de ' + navigation.state.params.group,
        ... navigationOptions
    });

    componentsWillMount() {
        this.setState({
            event: {}
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.coverImage} source={require('../assets/event.jpeg')} />
                <Text style={styles.title}>{this.state.event.title}</Text>
                <View style={styles.info}>
                    <Icon style={styles.infoIcon} name="calendar-o" size={20} color="grey"/>
                    <View>
                        <Text style={styles.infoText}>{this.state.event.date}</Text>
                        <Text style={styles.infoSubText}>{this.state.event.date}</Text>
                    </View>
                </View>
                <View style={styles.infoI}>
                    <Icon style={styles.infoIcon} name="map-marker" size={20} color="grey"/>
                    <View>
                        <Text style={styles.infoText}>{this.state.event.location}</Text>
                        <Text style={styles.infoSubText}>{this.state.event.locationAddress}</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <TouchableHighlight style={styles.rsvpButton} onPress={() => null}>
                        <View>
                            <Text style={styles.rsvpText}>Apuntarse</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>{this.state.event.description}</Text>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    coverImage: {
        flex: 1,
        height: 300
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 10
    },
    info: {
        flexDirection: 'row',
        marginHorizontal: 20
    },
    infoIcon: {
        margin: 10
    },
    infoText: {
        color: 'grey',
        fontSize: 17
    },
    rsvpButton: {
        flex: 1,
        backgroundColor: 'red',
        margin: 15,
        padding: 10,
        borderRadius: 3
    },
    rsvpText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        backgroundColor: '#eaeaea',
        borderTopWidth: 1,
        borderColor: '#aaa',
        padding: 20,
        marginTop: 10
    },
    descriptionText: {
        fontSize: 17
    }
})