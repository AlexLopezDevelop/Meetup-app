import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation'

import MeetupList from './src/components/MeetupList';
import AppNavigation from './AppNavigation'
import Auth from './src/components/Auth'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        user: { email:'alex_lopez.es@icloud.com' }
      })
    }, 2000)
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{ felx: 1 }}>
          <MeetupList/>
        </View>
      </SafeAreaView>
    );
  }
}
